/**
 * 组件的预设数据
 */
const baseComponentList = [
    {
      id: 1,
      componentName: "下拉框",
      title: "下拉框",
      componentType: 0,
      elementType: "SELECT",
      required: "false",
      options: [
        { label: '选项一' },
        { label: '选项二' },
      ],
      defaultOption: "",
      deleted: false
    },
    {
      id: 2,
      componentName: "文本框",
      title: "文本框",
      componentType: 0,
      elementType: "TEXT",
      required: "false",
      placeholder: "请输入",
      deleted: false
    },
    {
      id: 3,
      componentName: "单选",
      title: "单选",
      componentType: 0,
      elementType: "RADIO",
      options: [
        { label: '选项一' },
        { label: '选项二' },
      ],
      defaultOption: "",
      required: "false",
      deleted: false
    },
    {
      id: 4,
      componentName: "多选",
      title: "多选",
      componentType: 0,
      elementType: "CHECKBOX",
      limitSelectedNum: false,//true限制----false不限制
      optionSelectedMin: "",//最少
      optionSelectedMax: "",//最多
      options: [
        { label: "选项一" },
        { label: "选项二" },
        { label: "选项三" },
      ],
      defaultOption: "",
      required: "false",
      deleted: false
    },
    {
      id: 5,
      componentName: "所在地区",
      title: "所在地区",
      componentType: 0,
      elementType: "ADDRESS",
      required: "false",
      deleted: false
    }
  ];
  // 业务组件
  const bizComponentList = [
    {
      id: 101,
      componentType: 1,
      componentName: "买家昵称",
      title: "买家昵称",
      elementType: "TEXT",
      required: "true",
      placeholder: "请获取买家昵称",
      deleted: false
    },
    {
      id: 102,
      componentType: 1,
      componentName: "姓名",
      title: "姓名",
      elementType: "TEXT",
      required: "false",
      placeholder: "我们怎么称呼您？",
      deleted: false
    },
    {
      id: 103,
      componentType: 1,
      componentName: "性别",
      title: "性别",
      elementType: "RADIO",
      options: [
        { label: "男" },
        { label: "女" },
      ],
      defaultOption: "",
      required: "false",
      deleted: false
    },
    {
      id: 104,
      componentType: 1,
      componentName: "手机号",
      title: "手机号",
      elementType: "TEXT",
      required: "false",
      placeholder: "请输入您的手机号，方便我们及时联系您",
      deleted: false
    },
    {
      id: 105,
      componentType: 1,
      componentName: "预约时间",
      title: "预约时间",
      elementType: "SELECT",
      required: "true",
      placeholder: "您何时方便，我们将及时为您服务",
      deleted: false
    },
    {
      id: 106,
      componentType: 1,
      componentName: "预约门店",
      title: "预约门店",
      elementType: "SELECT",
      required: "true",
      placeholder: "您可以选择距离较近的门店",
      deleted: false
    },
    {
      id: 107,
      componentType: 1,
      componentName: "预约项目",
      title: "预约项目",
      elementType: "SELECT",
      required: "true",
      placeholder: "请选择您需要的服务项目",
      deleted: false
    },
  ];
  // banner组件
  const bannerComponent = {
    id: 201,
    componentType: 1,
    componentName: "页面设置",
    title: "页面设置",
    elementType: "page",
    required: "true",
    bannerSrc: 'https://isv.alibabausercontent.com/010221699045/imgextra/i1/732742758/O1CN01RRrAgE1WFCxFOEy7e_!!732742758-2-isvtu-010221699045.png',
    bannerLink: '',
    bgColor: '#F6F6F6',
  };
  // 按钮组件
  const saveBtnComponent = {
    id: 202,
    componentType: 1,
    componentName: "提交按钮",
    title: "提交按钮",
    elementType: "submitBtn",
    required: "true",
    btnColor: '#4B70F8',
  };
  export {
    baseComponentList,
    bizComponentList,
    bannerComponent,
    saveBtnComponent,
  };
  