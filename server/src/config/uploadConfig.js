const uploadConfigList = [
  { // 快手
    url: "https://music.kuaishou.com/rest/kd/music/musician/v2/upload/image",
    formData: {
      fileParamName: "file",
      addParam: []
    },
    headers: {
      "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryfWXcLJzRJKAv72NW",
      "cookie": "clientid=3; did=web_83de1d93aca75ff185b73fe33f7631df; client_key=65890b29; didv=1648384471487; userId=2827897496; kuaishou.web.api_st=ChNrdWFpc2hvdS53ZWIuYXBpLnN0EqABH_0TxNZCXOsaPDtMFGBnaMuIEX5X8lSZ6_dlwh29FhijT4UGFo2Rz0bYqn711NYSifIngTpyd4OfI36QNAJm8_jYG_eo4lJ-HR3yd_fjuJ3qjERagptun4zWQpABtS0-qkfmIPni03rI25-KX-HF3sCFo3cD5Ip0sa4ReLGYP3EsYWVVV2IQS-5RrgM77Ebl9cjN5PnK9mbKYS7dOf1DoRoSE_eIqAG0SIWJ97gBBYFFtm2mIiANw99KC8xjVHqhk-65_T_f0Rq3WSqZlZkN72uZKfVueygFMAE; kuaishou.web.api_ph=bf5d871ca8dfc36002aeb3e852e2c35cbc28",
    },
    result: "urls.0.url",
  },
  { // 虎扑
    url: "https://music.kuaishou.com/rest/kd/music/musician/v2/upload/image",
    formData: {
      fileParamName: "file",
      addParam: []
    },
    headers: {
      "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryyD0ULjG6deVMB6vl",
      "cookie": "_HUPUSSOID=d94a2f84-91c4-41ac-842f-d5f239920c92; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22180ca78df3aca0-00cf4216e561b1c-17333270-3110400-180ca78df3bb87%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%22180ca78df3aca0-00cf4216e561b1c-17333270-3110400-180ca78df3bb87%22%7D; _CLT=b0c2a05996d8b48b354e1fa4ddfc1fef; u=96443712|6JmO5omRSlIwNTQ2MzgxMzU1|3e9b|747bce717c7fc06a3e7254fadb4c9896|688674512f88ea66|aHVwdV82Nzg4OTA2N2M5MDA3ODE0; us=d49813da5e0b1c1dd1f7d324b3b49f239fa3e9ad5add0d2b6888d8a90d32a9f3dd70f61f64786ee53cfdc1f9aa408a810035a6049237ce874ab445ab008b8936; smidV2=20220608151927538dad49ce0fd9d77ac266e939ff624a005ae6a90791d0480; ua=127282520; Hm_lvt_4fac77ceccb0cd4ad5ef1be46d740615=1652664357,1654135051,1654672777; Hm_lvt_b241fb65ecc2ccf4e7e3b9601c7a50de=1652664357,1654135051,1654672777; Hm_lpvt_b241fb65ecc2ccf4e7e3b9601c7a50de=1654672792; Hm_lpvt_4fac77ceccb0cd4ad5ef1be46d740615=1654672792; acw_tc=2f624a3616546727937608220e5f22d80c06c636bb5ce8a87faae6493a3ab6; csrfToken=2w8rJdkqKn7I07llbRHplR2d; Hm_lvt_df703c1d2273cc30ba452b4c15b16a0d=1652664361,1654135100,1654672795; Hm_lpvt_df703c1d2273cc30ba452b4c15b16a0d=1654672805; .thumbcache_33f5730e7694fd15728921e201b4826a=K97YFp+amvCA5f13Uw8RWiUhslwmDZtL8wLclsnagwsGdgt4Ptm5DDAnoikSgtBujxp+xJZZuHWoRKAiBHxftg%3D%3D",
      "x-csrf-token": "2w8rJdkqKn7I07llbRHplR2d",
      "encry_uid": "62687529845867",
    },
    result: "0",
  },
  { // 豆瓣
    url: "https://www.douban.com/j/upload",
    formData: {
      fileParamName: "image",
      addParam: [
        [ "ck", "_odJ" ],
        [ "upload_auth_token", "170201692:721dbc086cd2d1edc2d7d5c476fdc012e27d308e" ],
      ]
    },
    headers: {
      "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryGm5AOIN4voqVtqTa",
      "cookie": `ll="108251"; bid=0wryF26taeE; __utmz=30149280.1655274677.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __gads=ID=693872f7910d4ae1-2206fd5f8cd400ff:T=1655274682:RT=1655708270:S=ALNI_MaGoQ2zypz9YcRYtufQlKwAQV0UqA; __gpi=UID=0000074f549666c8:T=1655274682:RT=1655708270:S=ALNI_MZ20FG6u3Bn6Q5gqbl7yqCGIyJAjw; _pk_ses.100001.8cb4=*; __utma=30149280.290321449.1655274677.1655708266.1656037044.3; __utmc=30149280; __utmt=1; dbcl2="170201692:j+MLIXA94vw"; ck=_odJ; ap_v=0,6.0; push_noty_num=0; push_doumail_num=0; __utmv=30149280.17020; _pk_id.100001.8cb4=d9096c4618171651.1655274660.3.1656037123.1655708267.; __utmb=30149280.5.10.1656037044`,
    },
    result: "url",
  },
  { // B站
    url: "https://member.bilibili.com/x/material/up/upload",
    formData: {
      fileParamName: "file",
      addParam: [
        [ "csrf", "74453f4cac7d2b2969a21c6aa0805468" ],
        [ "bucket", "material_up" ],
        [ "dir", "" ],
      ],
    },
    headers: {
      "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7nghvYNg4aE69vAx",
      "cookie": `buvid3=21181623-011F-43E8-AB95-1252B26D349414262infoc; _uuid=410F22B49-DE59-7E102-110DD-8144E6D1B32C15632infoc; rpdid=|(J~|J|)mu|~0J'uYRum)kuu~; DedeUserID=383444010; DedeUserID__ckMd5=4c7877d000f35f7c; SESSDATA=8a922dc1%2C1657534178%2C61bbd*11; bili_jct=74453f4cac7d2b2969a21c6aa0805468; buvid4=BFDF4DD7-AC6B-8734-B670-61A657BD4E9B44743-022020911-SjAPq9halyhV+xaoyvbfSQ%3D%3D; i-wanna-go-back=-1; b_ut=5; CURRENT_BLACKGAP=0; LIVE_BUVID=AUTO4716462831070663; buvid_fp_plain=undefined; sid=7ui0bmkl; buvid_fp=efb23be0a92e3b2959d6d04c2a6909a3; nostalgia_conf=-1; blackside_state=0; CURRENT_QUALITY=116; PVID=2; innersign=0; b_lsid=2F52CF37_18193708B7D; is-2022-channel=1; CURRENT_FNVAL=4048; bp_video_offset_383444010=675164993464827900; fingerprint3=f3f61a305d6cdf6db3ebc7cef3e9179b; fingerprint=6ac1de20ee4b34c8352119aaf6fe2104; b_timer=%7B%22ffp%22%3A%7B%22333.1007.fp.risk_21181623%22%3A%2218193709615%22%2C%22333.1073.fp.risk_21181623%22%3A%221819370A68D%22%2C%22666.4.fp.risk_21181623%22%3A%221819370BC68%22%2C%22666.25.fp.risk_21181623%22%3A%221819370DD54%22%2C%22333.999.fp.risk_21181623%22%3A%22181939B3C6B%22%2C%22333.885.fp.risk_21181623%22%3A%22181939C37B4%22%2C%22333.1024.fp.risk_21181623%22%3A%22181939C4DFC%22%2C%22333.954.fp.risk_21181623%22%3A%22181939C8B01%22%7D%7D`,
    },
    result: "data.location"
  },
  { // 腾讯
    url: "https://fileaccess.video.qq.com/upload/image?channel=v_station_video_web_comment",
    formData: {
      fileParamName: "base64",
      addParam: [],
    },
    paramType: "base64",
    headers: {
      "cookie": "tvfe_boss_uuid=84392242b23bf045; pgv_pvid=3174186150; video_platform=2; RK=Odf966Fk9S; ptcz=5f4d82a3849bea732e08f3c2914f11a7d292e7fb786c3e7db0334043457937f6; eas_sid=J1n6Q4B9t2T587i5J8T5p8D5e0; video_guid=23d1c7453e5111a3d6806ee7af225614; main_login=qq; vqq_access_token=42ABC713B829A130421FE0BD93CE4AE2; vqq_appid=101483052; vqq_openid=5CB4069B3B37F4BDD86C3983B5D7ED87; vqq_vuserid=472967877; vqq_refresh_token=245D5534B614724768ED8B6EC8E15FF0; vqq_vusession=UlbkUUh_g_gYOVVuBmJDsw.N; pgv_info=ssid=s6404279550; uid=450499471; vversion_name=8.2.95; video_omgid=23d1c7453e5111a3d6806ee7af225614; vqq_next_refresh_time=6493; vqq_login_time_init=1656429916; login_time_last=2022-6-28 23:25:12"
    },
    result: "url"
  },
  { // 慕课网
    url: "http://coding.imooc.com/learn/uploadimg",
    formData: {
      fileParamName: "pic",
      addParam: [
        // [ "id", "WU_FILE_0" ],
        // [ "name", "DM_20220326112405_001.jpg" ],
        // [ "type", "image/jpeg" ],
        // [ "lastModifiedDate", "WU_FILE_0" ],
        // [ "id", "WU_FILE_0" ],
      ],
    },
    headers: {
      "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary0qBpEXBLrHDrAuTV",
      "cookie": "completeuinfo:4522204=%7B%22type%22%3A0%2C%22time%22%3A1656435647%7D; imooc_uuid=44b472d6-de95-46e4-9650-2a69771cbb1d; imooc_isnew_ct=1649250337; imooc_isnew=2; zg_did=%7B%22did%22%3A%20%2217fff564e81d6-068501cab69325-9771a39-1fa400-17fff564e82d92%22%7D; zg_f375fe2f71e542a4b890d9a620f9fb32=%7B%22sid%22%3A%201649512305797%2C%22updated%22%3A%201649512773541%2C%22info%22%3A%201649256320649%2C%22superProperty%22%3A%20%22%7B%5C%22%E5%BA%94%E7%94%A8%E5%90%8D%E7%A7%B0%5C%22%3A%20%5C%22%E8%AF%B8%E8%91%9Bio%5C%22%7D%22%2C%22platform%22%3A%20%22%7B%7D%22%2C%22utm%22%3A%20%22%7B%7D%22%2C%22referrerDomain%22%3A%20%22coding.imooc.com%22%2C%22zs%22%3A%200%2C%22sc%22%3A%200%2C%22firstScreen%22%3A%201649512305797%7D; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%224522204%22%2C%22first_id%22%3A%2217ffefb821c5f-07fad90f7aa942-9771a39-2073600-17ffefb821d45c%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%2217ffefb821c5f-07fad90f7aa942-9771a39-2073600-17ffefb821d45c%22%7D; june2022=1655651594000; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1655651701,1656432063; loginstate=1; apsid=JmOWJiYjJkMmFhOTFjZDE4YTk0ZjFhMzc2NGM4ZDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDUyMjIwNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMjE4NTY2Mzg5QHFxLmNvbQAAAAAAAAAAAAAAAAAAADI2NzI4ZDgzYjYzM2YyMjFhY2Y2ZjI0MjkwNDdlMTkzQjK7Ys8UVV0%3DOD; last_login_username=3218566389%40qq.com; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1656435607; Hm_lvt_c1c5f01e0fc4d75fd5cbb16f2e713d56=1655651722,1656435615; Hm_lpvt_c1c5f01e0fc4d75fd5cbb16f2e713d56=1656435639; cvde=62bb25c367428-23"
    },
    result: "url"
  },
]