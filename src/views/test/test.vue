<template>
  <div class="testCont">
    <div>
      <van-field
        v-model="url"
        name="后台访问地址"
        label="后台访问地址"
        placeholder="后台访问地址"
        disabled
        :rules="[{ required: true, message: '请填写后台访问地址' }]"
      />
      <van-field
        v-model="appId"
        name="应用编号"
        label="应用编号"
        placeholder="应用编号"
        :rules="[{ required: true, message: '请填写应用编号' }]"
      />
      <van-field
        v-model="merchId"
        name="商户号"
        label="商户号"
        placeholder="商户号"
        :rules="[{ required: true, message: '请填写商户号' }]"
      />
      <van-field
        v-model="mobileNo"
        name="用户手机号"
        label="用户手机号"
        placeholder="用户手机号"
        :rules="[{ required: true, message: '请填写用户手机号' }]"
      />
      <van-field
        v-model="payAmount"
        name="支付金额"
        label="支付金额"
        placeholder="支付金额"
        :rules="[{ required: true, message: '请填写支付金额' }]"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          @click="onSubmit"
        >
          提交
        </van-button>
      </div>
    </div>

    <div
      ref="htstr"
      v-html="payInfo"
    />
  </div>
</template>

<script>
import service from '@/utils/ajax';

export default {
  name: 'Test',
  data() {
    return {
      url: 'https://test.17ebank.com:9099/mobilegw/gateway',
      appId: '1800017',
      merchId: 'faw00033',
      mobileNo: '13910783712',
      payAmount: '0.01',
      sign: '',
      payInfo: ''
    };
  },
  methods: {
    onSubmit(values) {
      const date = this.dateFun();
      const id = `TEST${date}${_.random(100000, 999999, false)}`;
      const data = {
        operationType: 'eigpay.esp.paytrans.handle',
        appId: this.appId,
        sign: '',
        requestData: {
          versionNo: '1.60',
          appId: this.appId,
          appTp: '01',
          bizId: id,
          merchId: this.merchId,
          sendTime: date,
          reqSrcTp: '01',
          tntInstId: '1100003',
          language: 'zh_cn',
          requestId: id,
          txnTp: '20',
          notifyUrl: 'https://www.baidu.com',
          userIp: '124.235.210.28',
          productName: 'H5支付测试',
          productDc: 'H5支付',
          bizTp: '108',
          payTunnelTp: '02',
          pmtType: '95',
          subBizTp: '*',
          loginId: '3475823734128373751050',
          loginTp: '01',
          bizAmount: this.payAmount,
          payAmount: this.payAmount,
          bizCcy: 'CNY',
          payCcy: 'CNY',
          effectiveTime: '20',
          userMac: 'd2-01-1f-36-A2-19',
          mobileNo: this.mobileNo
        }
      };
      this.evaluate(data);
    },
    evaluate(bodyParameters) {
      // bodyParameters.requestData = requestData1111;

      // const keysArr = Object.keys(bodyParameters).sort();
      // let reqstr = "";
      // for (let i = 0; i < keysArr.length; i++) {
      //   const key = keysArr[i];
      //   if (key !== "sign") {
      //     reqstr = reqstr + key + "=" + encodeURI(obj[key]) + "&";
      //     // reqstr = reqstr + key + '=' + obj[key].getEvaluatedString() + '&';
      //   } else {
      //     reqstr = reqstr.substr(0, reqstr.lastIndexOf("&"));
      //   }
      // }

      const reqStr = `appId=${
        encodeURI(bodyParameters.appId)
      }&` +
        `operationType=${
          encodeURI(bodyParameters.operationType)
        }&` +
        `requestData=${
          JSON.stringify(bodyParameters.requestData)}`;

      console.log(reqStr);

      const requestJson = {};
      requestJson.key = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD3qbDdotbH0BaooS0w+uz5u+E1FLwxrAZdff8U0BWYkHPmKwQFPbXXDUdEpj6ueYMLLIL1A0MhdlvW3qwgPEj/8osKuZyUiZXomFGizc7eAbyccbi59U1GRrD0n1xdpywmqgugyVBGOiefNLGW6hI4AZOnKQN77z/cXBw3QWy00YX7p582aiWbG0scyr4F1bO4CnYhQcXW1WlmOawpRKpVsrdaXfXpP+oHDimxukyLP0foV0h7HzJVu8wIWvLUcdQHKFHDyH7CMjA804pNOBetBMO50EXzfpDmyhOwQT1EGcCw+1q7EUWhNER5OaTxVmADl/nedDbpXnfUF6X14f59AgMBAAECggEAAmVX2q0KmuA+d98nSsQCqt/Qa+0JbQmW/iyL3S2uJ82t8VoVLd/M9ImiWN2q2ZE/XUpO8gPYEGjOtqNs0tsCccds5Ouqwh0aoCdpEsQe7jLiGjlXaiUfXECu0Y8BG77URIN8nU+VQTiqzXV7ClS1XGlXflR9PiOwYHdbpoUxggZIAFX9nlPnAmYk1cFITwVcukkbASIOwmqB84tTSUBk/xQYG+Lz3yd0G6YGxQETkOctbQy9MZuQ5pFbjj4e6bf1MX3TqpALmk8lqQVsVZZI5DItMgRKigMQPcDFJGV4dSRTWcEMv6YVMDPEvM48snFgRIMh+Wmw8jLitHG0509CAQKBgQD9LHxykK9Av9qR76sZFubRcsjf/7oQm0FpAcQ14r8x/T0dxfJrSHEDXWXSNcwTgJL4Un5Amq2brAFZ15xKP7ZPk9eDTMWaPJxyEBx9nKqnapl8Q+DO1Ff8wkgbPLsMaRJwqbqwcNvVEsN18xNdFYsr593sNIC7A4K06RDvWRZ2wQKBgQD6bXSuiaiWZn83MrqsFDbb88JG5IiPFesSI1ZwY7kN9X7Psd8fLZkXesOhXU4X8IfWW6LTPp9qMUvCTSPyIoNtQNWWldDBpzM7R7wnvTlCCKZ6QnVMMrFg75tzieOGNffFGAzHFJLHqLRDY9aIMI8oCjPM1oCp+U7hEZ+bjWLSvQKBgQD8pf1W8u4BZrP++La9Je6Xy72MVA3hbp4a5UliIPJ+N2JbKOPfjf5Bxl3LJiaOu7tvFhup6vIfLMp4VsNAEU6lITtraxyy65OP/GYCMGrZAXdD3BUnMh7QPS1qCPP80Yo2ZhrI4wduHfhy521Gci5dVVlQ06A3gKxaT0+4GyZgwQKBgAsQ6ycLTjfXL6fwxe70tbfifaNEVgR8o3aZuSgeP/8t6fyjj4iBK1KuShbHWLwWFOqUAg3zpne61e4wGnaIr+YUB1wwIplsGgd0lAvtgKo6V6Dvbt9/Hfd6nxPr8/HqUJiVB3uEnTfVbKHNt50tCCZszP0wPV9FdQbdEIB/Lu7BAoGBAO7tN1QUtKqPUyfdlsxRGIzGkocRNho7WccwrgVrxZ+7Y2/gb8YOtzDFbKtDuczYNrTVWIIxPUY4n4Vl1KrhwviDZMfs8VXU9QQLw2h5gZ9u4m8ADpqJHlYP2FRLFt5WsvK52weSeNm1wOxm5aTjoZwBRWUcls8mobQnoZRdxJ/D';
      requestJson.waitSingStr = reqStr;

      console.log(JSON.stringify(requestJson));
      service
        .post('/sign', JSON.stringify(requestJson), {
          baseURL: '/sign'
        })
        .then((res) => {
          console.log(res);
          this.sign = res;
          this.postFun(bodyParameters);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    postFun(data) {
      const reqData = data;
      reqData.sign = this.sign;

      const reqStr = `operationType=${
        reqData.operationType
      }&` +
        `appId=${
          reqData.appId
        }&` +
        `sign=${
          encodeURIComponent(reqData.sign)
        }&` +
        `requestData=${
          encodeURIComponent(JSON.stringify(reqData.requestData))}`;

      service
        .post('/gateway', reqStr)
        .then((res) => {
          const data = JSON.parse(res.result);
          if (data.returnCode == '0000') {
            console.log('成功');
            console.log(data);
            console.log(data.payInfo);
            this.payInfo = data.payInfo;

            const scriptStr = 'script';
            let str = data.payInfo.split(`</${scriptStr}`)[0];
            str = str.split(`${scriptStr}>`)[1];
            const templateJs = str;

            this.$nextTick(() => {
              const ele = document.createElement('script');
              ele.innerHTML = templateJs;
              this.$refs.htstr.append(ele);
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    dateFun() {
      const date = new Date();
      const year = date.getFullYear().toString();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const hour = date.getHours().toString().padStart(2, '0');
      const min = date.getMinutes().toString().padStart(2, '0');
      const sec = date.getSeconds().toString().padStart(2, '0');
      const returnDate = year + month + day + hour + min + sec;
      return returnDate;
    }
  }
};
</script>

<style scoped lang="scss">
.testCont {
  padding: 20px 5% 0;
}
</style>
