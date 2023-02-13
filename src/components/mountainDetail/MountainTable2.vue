<template>
  <a-table
    :columns="columns"
    :data-source="dataSource"
    :pagination="pagination"
    @change="onChange"
  >
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span>산이름</span>
      </template>
    </template>
    <template
      #customFilterDropdown="{
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        column,
      }"
    >
      <div style="padding: 8px">
        <a-input
          ref="searchInput"
          :placeholder="`Search ${column.dataIndex}`"
          :value="selectedKeys[0]"
          style="width: 188px; margin-bottom: 8px; display: block"
          @change="
            (e) => setSelectedKeys(e.target.value ? [e.target.value] : [])
          "
          @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
        />
        <a-button
          type="primary"
          size="small"
          style="width: 90px; margin-right: 8px"
          @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
        >
          <template #icon><SearchOutlined /></template>
          Search
        </a-button>
        <a-button
          size="small"
          style="width: 90px"
          @click="handleReset(clearFilters)"
        >
          Reset
        </a-button>
      </div>
    </template>
  </a-table>
</template>
<script>
import { usePagination } from 'vue-request';
import { SearchOutlined } from '@ant-design/icons-vue';
import { reactive, ref, toRefs, computed } from 'vue';
import axios from 'axios';
import 'ant-design-vue/dist/antd.css';
// const queryData = (params) => {
//   return axios
//     .get('http://localhost:5173/data/mountain-garbage.json')
//     .then((res) => console.log('params', res));
// };

export default {
  name: 'mountain-table',
  data() {
    return {
      isLoading: false,
      mountainSearchList: [
        // {
        //   key: 0,
        //   name: '',
        //   garbage: '',
        // },
      ],
    };
  },
  components: {
    SearchOutlined,
  },
  // created() {
  //   this.setMountainSearchList();
  // },
  setup() {
    const {
      data: dataSource,
      run,
      loading,
      current,
      pageSize,
    } = usePagination(queryData, {
      // formatResult: (res) => res.data.results,
      pagination: {
        currentKey: 'page',
        pageSizeKey: 'results',
      },
    });
    const pagination = computed(() => ({
      total: 200,
      current: current.value,
      pageSize: pageSize.value,
    }));

    const state = reactive({
      searchText: '',
      searchedColumn: '',
    });
    const onChange = (pag, filters, sorter) => {
      console.log('params', pagination, filters, sorter);
      run({
        results: pag.pageSize,
        page: pag?.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    };

    const searchInput = ref();

    const columns = [
      {
        title: '산이름',
        dataIndex: 'name',
        key: 'name',
        customFilterDropdown: true,
        onFilter: (value, record) =>
          record.name.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus();
            }, 100);
          }
        },
      },
      {
        title: '위치',
        dataIndex: 'location',
      },
      {
        title: '연간 쓰레기 처리량(톤)',
        dataIndex: 'garbage',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.garbage - b.garbage,
      },
      {
        title: '등산 난이도',
        dataIndex: 'level',
        // key: 'level',
        filters: [
          { text: '상', value: '상' },
          { text: '중', value: '중' },
          { text: '하', value: '하' },
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.level.indexOf(value) === 0,
      },
    ];

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      state.searchText = selectedKeys[0];
      state.searchedColumn = dataIndex;
    };

    const handleReset = (clearFilters) => {
      clearFilters({ confirm: true });
      state.searchText = '';
    };

    async function queryData() {
      try {
        await axios
          .get('http://localhost:5173/data/mountain-garbage.json')
          .then((res) => {
            //console.log(res.data.data);
            // this.mountainSearchList = res.data.data;
            for (const value of res.data.data) {
              console.log(value);
              // this.mountainSearchList = value;
            }
          });
      } catch (error) {
        console.error(error);
      }
    }
    return {
      dataSource,
      pagination,
      columns,
      loading,
      handleSearch,
      handleReset,
      searchInput,
      onChange,
      ...toRefs(state),
    };
  },

  methods: {
    setMountainSearchList(props) {
      // this.mountainSearchList = props;
      console.log(props);
    },
  },
  // mounted() {
  //   this.queryData();
  // },
};
</script>
