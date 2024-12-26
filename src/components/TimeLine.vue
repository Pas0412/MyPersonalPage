<template>
    <div class="container">
      <h3 class="text-center">Experience Timeline</h3>
      <div class="experience">
        <!-- 使用v-for遍历workExperiences数组，渲染每个工作经历对应的item -->
        <div class="item" v-for="(experience, index) in workExperiences" :key="index">
          <h5 class="company-name">{{ experience.companyName }}</h5>
          <div class="location">
            <i class="fa fa-map-marker" aria-hidden="true"></i>{{ experience.location }}
          </div>
          <div class="job-info">
            <div class="title">{{ experience.jobTitle }}</div>
            <div>{{ experience.timePeriod }}</div>
          </div>
          <div>
            <ul class="duties">
              <!-- 再嵌套v-for循环遍历每个工作经历中的职责列表 -->
              <li v-for="(duty, dutyIndex) in experience.duties" :key="dutyIndex">
                <i class="duties"></i>{{ duty }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
<script setup>
import { ref } from 'vue';

// 定义工作经历的数据数组，每个对象代表一段工作经历
const workExperiences = ref([
  {
    companyName: 'Xiamen E-port Co., Ltd',
    location: 'Xiamen',
    jobTitle: 'Software Engineer',
    timePeriod: '2024.12 - Present',
    duties: [
      "Full stack Development",
      "Research & Development on LLM implementation",
    ],
  },
  {
    companyName: 'Aibafang Group Co., Ltd',
    location: 'Shenzhen',
    jobTitle: 'Intern',
    timePeriod: '2024.6 - 2024.8',
    duties: [
      "AI consulting",
    ],
  },
  {
    companyName: 'Saint-Gobain Research (Shanghai) Co., Ltd',
    location: 'Shanghai',
    jobTitle: 'Intern',
    timePeriod: '2023.8 - 2024.2',
    duties: [
      "Data visualization & Front-end development",
    ],
  },
  {
    companyName: 'Mindu Co., Ltd',
    location: 'Fuzhou',
    jobTitle: 'Intern',
    timePeriod: '2022.9 - 2022.12',
    duties: [
      "Web development",
    ],
  },
  {
    companyName: 'Universite de technologie de Belfort-Montbeliard',
    location: 'Belfort',
    jobTitle: 'Master',
    timePeriod: '2021.9 - 2024.10',
    duties: [
      "Engineer of France, the same as the master degree in China(certificated)",
    ],
  },
  {
    companyName: 'Shanghai University',
    location: 'Shanghai',
    jobTitle: 'Bachelor',
    timePeriod: '2017.9 - 2021.7',
    duties: [
      "Bachelor of Information Engineering",
    ],
  },
  {
    companyName: 'Xiamen No.1 high school',
    location: 'Xiamen',
    jobTitle: 'Student',
    timePeriod: '2014.9 - 2017.6',
    duties: [
      "High school of science",
    ],
  },
  {
    companyName: 'Xiamen Datong middle school',
    location: 'Xiamen',
    jobTitle: 'Student',
    timePeriod: '2011.9 - 2014.6',
    duties: [
      "Middle school",
    ],
  },
  {
    companyName: 'Xiamen Gongyuan primary school',
    location: 'Xiamen',
    jobTitle: 'Student',
    timePeriod: '2008.9 - 2011.6',
    duties: [
      "Transfer student to Xiamen, moved to Xiamen with my family",
    ],
  },
  {
    companyName: 'Shanghang Experimental primary school',
    location: 'Shanghang',
    jobTitle: 'Student',
    timePeriod: '2005.9 - 2008.6',
    duties: [
      "Primary school",
    ],
  },
  {
    companyName: 'Home',
    location: 'Shanghang',
    jobTitle: 'Kid',
    timePeriod: '1999.4 - 2005.6',
    duties: [
      "Alive, play, enjoy life."
    ],
  },
  {
    companyName: 'Home',
    location: 'Shanghang',
    jobTitle: 'Born',
    timePeriod: '1999.4.12',
    duties: [
      "I'm borned!"
    ],
  },
]);
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h3 {
  margin: 20px 0;
  color: #add8e6;
  z-index: 2;
}

.experience {
  width: 60%;
  border-left: 3px solid grey;
  padding: 0 30px;
  margin-left: 185px;
  @media (max-width: 767px) {
    margin-left: 0;
    padding-right: 0;
  }
  .item {
    position: relative;
    margin-bottom: 40px;
    &::before {
      @include round-btn(-43px, 0, 22px, 22px, white);
      border: 3px solid grey;
    }
    &::after {
      @include round-btn(-37px, 6px, 10px, 10px, grey);
    }
  }
  .company-name {
    color: #add8e6;
  }
  .location {
    position: absolute;
    right: 0;
    top: 2px;
    color: #add8e6;
    .fa {
      margin-right: 8px;
    }
  }
  .job-info {
    position: absolute;
    left: -185px;
    top: 0;
    color: white;
    
    @media (max-width: 767px) {
      position: static;
      margin-bottom: 1rem;
    }
  }
  .duties {
    color: white;
    font-size: 0.7rem;
  }
}

.job-info .title {
      color: #add8e6;
    }
</style>
