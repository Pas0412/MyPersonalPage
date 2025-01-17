<template>
    <n-space vertical>
      <n-date-picker
        v-model:value="selectedDate"
        type="datetime"
        format="yyyy-MM-dd HH:mm:ss"
        clearable
      />
      <n-button @click="calculateBirthCharacter">计算生辰八字</n-button>
      <n-message v-if="message.show" :content="message.content" :type="message.type" />
      <div v-if="birthCharacter">八字: {{ birthCharacter }}</div>
      <n-descriptions bordered :column="5">
        <n-descriptions-item v-for="(value, key) in baziData" :key="key" :label="key">
          {{ value }}
        </n-descriptions-item>
      </n-descriptions>
    </n-space>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  import { NDatePicker, NButton, NMessage, NSpace, NDescriptions, NDescriptionsItem } from 'naive-ui';
  import axios from 'axios';
  
  // 定义响应式变量
  const selectedDate = ref(null);
  const birthCharacter = ref('');
  const message = reactive({
    show: false,
    content: '',
    type: 'info'
  });
  let baziData = ref({});
  const pinyinToChineseMap = {
    "nyue": "农历月",
    "nri": "农历日",
    "ganzhinian": "干支纪年",
    "ganzhiyue": "干支纪月",
    "ganzhiri": "干支纪日",
    "xingqi": "星期",
    "yi": "宜",
    "ji": "忌",
    "jieri": "节日",
    "shengxiao": "生肖",
    "xingzuo": "星座",
    "xiangchong": "相冲",
    "jijie": "季节",
    "nianwuxing": "年五行",
    "yuewuxing": "月五行",
    "riwuxing": "日五行",
    "xingxiu": "星宿",
    "liuyao": "六爻",
    "shiershen": "十二神",
    "rulueri": "儒略日",
    "yisilan": "伊斯兰历",
    "pengzu": "彭祖",
    "taishen": "太神",
    "jieqi": "节气",
    "jieqimsg": "节气信息"
};
function convertPinyinToChinese(data, map) {
    const result = {};
    for (let key in data) {
        if (map[key]) {
            result[map[key]] = data[key];
        } else {
            result[key] = data[key];
        }
    }
    return result;
}
  
  // 计算生辰八字的函数
  const calculateBirthCharacter = async () => {
    if (!selectedDate.value) {
      showMessage('请选择日期', 'warning');
      return;
    }
    const date = new Date(selectedDate.value);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
  
    // 检查年份范围
    const currentYear = new Date().getFullYear();
    if (year < 1900 || year > currentYear + 1) {
      showMessage('年份不符合要求', 'error');
      return;
    }
  
    try {
      // 假设后端 API 地址为 https://example.com/api/bazi
      const response = await axios.get(`https://cn.apihz.cn/api/time/getzdday.php?id=10002088&key=516b3c3b74a44817b5d513fc74caa7c1&nian=${year}&yue=${month}&ri=${day}`);
      // 假设后端返回的是部分生辰八字信息，这里需要根据时柱的计算规则，将时作为依据补充完整
      baziData.value = response.data;
      console.log(response.data.ganzhinian, response.data.ganzhiyue.slice(0, -1), response.data.ganzhiri.slice(0, -1))
      const lunarYear = response.data.ganzhinian.slice(0, -1);
      const lunarMonth = response.data.ganzhiyue.slice(0, -1);
      const lunarDay = response.data.ganzhiri.slice(0, -1);
      delete baziData.value.ynian;
      delete baziData.value.yyue;
      delete baziData.value.yri;
      delete baziData.value.code;
      baziData.value = convertPinyinToChinese(baziData.value, pinyinToChineseMap);
      const completeBirthCharacter = calculateHourColumn(lunarYear, lunarMonth, lunarDay, hour, minute, second);
      birthCharacter.value = completeBirthCharacter;
      showMessage('计算成功', 'success');
    } catch (error) {
      console.error(error);
      showMessage('计算生辰八字时出错，请稍后重试', 'error');
    }
  };
  
  // 显示消息的函数
  const showMessage = (content, type) => {
    message.show = true;
    message.content = content;
    message.type = type;
  };
  
  // 计算时柱的函数，这里是一个简单示例，需要根据具体的生辰八字规则完善
  const calculateHourColumn = (lunarYear, lunarMonth, lunarDay, hour, minute, second) => {
    // 这里需要根据时柱的计算规则，将时作为依据补充完整
    // 以下是一个简单的占位，假设时柱只与小时有关
    const hourColumns = ["甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己巳", "庚午", "辛未", "壬申", "癸酉", "甲戌", "乙亥", "丙子", "丁丑"];
    const hourIndex = hour % 12;
    return `${lunarYear} ${lunarMonth} ${lunarDay} ${hourColumns[hourIndex]}`;
  };
  </script>
  
  <style scoped>
  </style>