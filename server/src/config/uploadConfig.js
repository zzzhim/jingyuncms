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
  { // 机核
    url: "https://www.gcores.com/gapi/v1/images",
    formData: {
      fileParamName: "file",
      addParam: [],
    },
    headers: {
      "Authorization": "Token token=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJ1c2VyX2lkIjo2MTQyMjMsImF1dGhfdG9rZW4iOiJEd3FqRHdHOEVjLWVSeXE3eXNFY1dRIn0.fjK9mk94P63XAN_JZjXFgP_OBEchYpW7cqsmX_X7pmJxoFHl6Fm_RJy5PtekIET39pfWfmbA1R5eZPYHqSAzBQ",
      "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryRBNqRvA78ni1jMpJ",
      "cookie": "sajssdk_2015_cross_new_user=1; wechatTicket=kgt8ON7yVITDhtdwci0qeVh-oVHCGueploMGrzaCyq_E3oojlWbla3bDUR1j6fOXXGeHdO1oscZ5M9FeDU42Ww; _ga=GA1.2.486368736.1656465340; _gid=GA1.2.1322259502.1656465340; __snaker__id=KaaBZebuYTBtD4ao; gdxidpyhxdE=BAveT9ZVO6JMNAB1LqwWDPws0yC2hipTTo12D%2FkZwBwAJO8KurjIKG7s%2F6DwTCNXhRKrsmrJcijXqEwMAciBbk3WJmtUDQXBqJmrXRnzIEZnDlnIpbvVdry5p%2F8DB%5C62wNb7SJJVAT%2B%2Bv648BAynEj%2BwJxvyb%2FR3uK4%2B6B6jRRkmpNpK%3A1656466240733; _9755xjdesxxd_=32; YD00528483946303%3AWM_NI=zrkZCw9fuYTYLhLARJ%2BqeygITTvaRd4qCxj1FlVabPi4LXFAZvPMa8LGtd7b0pEDUuZMi97NgJ%2B7ysYKbqA7Gl3buftubNoXBOOc3v1sOd8rsl1JZ7pHiUyGbTD8iW%2F9Nzg%3D; YD00528483946303%3AWM_NIKE=9ca17ae2e6ffcda170e2e6eea9cc7afbbabaa3c6488feb8fa6d14a839a8fb0c15ff8a6fda3db34a6a99a93cd2af0fea7c3b92abaaea5bbc27dfbbabbbad75390b884a2d142e9afab9ae643988cba82d170f8af8d99e93b86b49a82e15cabec84b9c54b9aaaa0aee4349099bc85b66af4b08ba5d87f9a93a7dab646a596e5d8fc799b95ae92c43d85b4fd83f86eb8abaeafee5482918184b27ef3ad8185bb7ab1b4ffabd93db498a7b6fc4da28c8cd9ec5dede7829be637e2a3; YD00528483946303%3AWM_TID=yr00yUSN8QRBRFFAFEKUBt2zBHtOlUvN; appToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJ1c2VyX2lkIjo2MTQyMjMsImF1dGhfdG9rZW4iOiJEd3FqRHdHOEVjLWVSeXE3eXNFY1dRIn0.fjK9mk94P63XAN_JZjXFgP_OBEchYpW7cqsmX_X7pmJxoFHl6Fm_RJy5PtekIET39pfWfmbA1R5eZPYHqSAzBQ; userID=614223; auth_token=IkR3cWpEd0c4RWMtZVJ5cTd5c0VjV1Ei--f4034f7a86562ef9119be23f3721b75d5682a035; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22614223%22%2C%22first_id%22%3A%22181ad073298cf7-01509dea499b74-26021b51-1382400-181ad073299cb7%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%A4%BE%E4%BA%A4%E7%BD%91%E7%AB%99%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fopen.weixin.qq.com%2F%22%7D%2C%22%24device_id%22%3A%22181ad073298cf7-01509dea499b74-26021b51-1382400-181ad073299cb7%22%7D; _gat=1"
    },
    baseUrl: "https://image.gcores.com/",
    result: "path",
  },
]
