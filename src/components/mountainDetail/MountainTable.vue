<template>
  <a-table :columns="columns" :data-source="this.mountainSearchList" bordered>
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
import { SearchOutlined } from '@ant-design/icons-vue';
import 'ant-design-vue/dist/antd.css';

export default {
  name: 'mountain-table',

  components: {
    SearchOutlined,
  },
  data() {
    return {
      isModal: false,
      mountainSearchList: [],
      searchText: '',
      isLoading: false,
      searchInput: null,
      searchedColumn: '',
      searchText: '',

      columns: [
        {
          title: '산이름',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '위치',
          dataIndex: 'address',
          customFilterDropdown: true,

          onFilter: (value, record) =>
            record.address
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
              setTimeout(() => {
                this.searchInput;
              }, 0);
            }
          },
        },
        {
          title: '연간 쓰레기 처리량(톤)',
          dataIndex: 'trash',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.trash - b.trash,
        },
        {
          title: '등산 난이도',
          dataIndex: 'difficulty',
          filters: [
            { text: '상', value: '상' },
            { text: '중', value: '중' },
            { text: '하', value: '하' },
          ],
          filterMultiple: false,
          onFilter: (value, record) => record.difficulty.indexOf(value) === 0,
        },
      ],
    };
  },

  methods: {
    handleSearch(selectedKeys, confirm, dataIndex) {
      confirm();
      this.searchText = selectedKeys[0];
      this.searchedColumn = dataIndex;
    },

    handleReset(clearFilters) {
      clearFilters({ confirm: true });
      this.searchText = '';
    },
    queryData() {
      this.isLoading = true;
      this.errData = null;
      fetch('http://localhost:5173/data/mountain-garbage.json')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          this.mountainSearchList = data.data;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
          this.errData =
            '오류가 발생하였습니다. 다시 새로고침을 시도하여 주십시오';
        });
    },
  },
  mounted() {
    this.queryData();
  },
};
</script>
