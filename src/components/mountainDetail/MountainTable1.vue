<template>
  <a-table :columns="columns" :data-source="mountainSearchList">
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
    <!-- <div v-if="this.isModal" class="flex justify-center">
      <mountain-modal
        v-model:onModalControl="onModalControl"
        :mountainItem="mountainItem"
      />
    </div> -->
  </a-table>
</template>
<script>
import { usePagination } from 'vue-request';
import { SearchOutlined } from '@ant-design/icons-vue';
import { reactive, ref, toRefs, computed } from 'vue';
import axios from 'axios';
import 'ant-design-vue/dist/antd.css';

const mountainSearchList = [];
export default {
  name: 'mountain-table',
  components: {
    SearchOutlined,
  },
  setup() {
    const {
      loading,
      current,
      pageSize,
      // mountainSearchList,
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
            const temp = res.data.data;
            console.log(temp[0]);
            //mountainSearchList = res.data.data;
            for (let i = 0; i < res.data.data.length; i++) {
              mountainSearchList.push({
                key: temp[i].id,
                name: temp[i].name,
                garbage: temp[i].trash,
                address: temp[i].address,
                location: temp[i].address,
                level: temp[i].difficulty,
              });
            }
          });
      } catch (error) {
        console.error(error);
      }
    }
    return {
      mountainSearchList,
      pagination,
      columns,
      loading,
      handleSearch,
      handleReset,
      searchInput,
      mountainSearchList,
      ...toRefs(state),
    };
  },

  methods: {
    setMountainSearchList(props) {
      // this.mountainSearchList = props;
      console.log(props);
    },
    async queryData() {
      try {
        await axios
          .get('http://localhost:5173/data/mountain-garbage.json')
          .then((res) => {
            console.log(res.data.data);
            this.mountainSearchList = res.data.data;
            for (const value of res.data.data) {
              console.log(value);
              // this.mountainSearchList = value;
            }
          });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
