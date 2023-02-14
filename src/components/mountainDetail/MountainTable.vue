<template>
  <a-table
    :columns="columns"
    :data-source="mountainList"
    bordered
    :customRow="customRow"
  >
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span @click="controlModal">산이름</span>
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
  <div v-if="this.isModal" class="flex justify-center">
    <mountain-modal
      @onModalControl="onModalControl"
      :mountainItem="mountainItem"
    />
  </div>
</template>

<script>
import { SearchOutlined } from '@ant-design/icons-vue';
import MountainModal from '@/components/mountainDetail/MountainModal.vue';
import 'ant-design-vue/dist/antd.css';

export default {
  name: 'mountain-table',
  props: ['mountainList'],
  components: {
    SearchOutlined,
    MountainModal,
  },

  data() {
    return {
      indexState: 0,
      isModal: false,
      mountainSearchList: [],
      mountainItem: {},
      searchText: '',
      isLoading: false,
      searchInput: null,
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
    onModalControl() {
      this.isModal = !this.isModal;
    },
    customRow(record) {
      return {
        onClick: (event) => {
          this.mountainItem = record;
          this.onModalControl();
        },
      };
    },
    handleSearch(selectedKeys, confirm, dataIndex) {
      confirm();
      this.searchText = selectedKeys[0];
      this.searchedColumn = dataIndex;
    },

    handleReset(clearFilters) {
      clearFilters({ confirm: true });
      this.searchText = '';
    },
  },
};
</script>
