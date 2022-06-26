import axios from "axios"

export async function douyinUpload(formData) {
  const res = await axios.post(
    'https://music.douyin.com/console/api/v1/upload/cover',
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary9HAjFnN1LkxkeCde",
        "cookie": "d_ticket=5a1c3a8593f1981e774d058a443bbac355310; passport_csrf_token=6386b68e9a62e6841dbe47450553c126; passport_csrf_token_default=6386b68e9a62e6841dbe47450553c126; n_mh=cGUM5WBME0ToA1vKSrAWjqYQdBN0__XL0vfAhlmFLDE; MONITOR_WEB_ID=a12a4d60-9269-4648-8496-dea5a687dc6d; Hm_lvt_fad7c1cf4f20c598e0b78b81566cbbc0=1654569887,1655445475; csrf_token=Hqp71EI_Z-I1lUwZGHNYGs11; _gid=GA1.2.326943161.1655445476; s_v_web_id=verify_l4i1htqr_pyKNOeiN_5pib_4h5j_BlF5_ZQyEubs9DVVL; sso_uid_tt=43cfc00e2b53d2a35807cd32202d7b08; sso_uid_tt_ss=43cfc00e2b53d2a35807cd32202d7b08; toutiao_sso_user=8db6a8231178fdc8e3dfa306a5bae77e; toutiao_sso_user_ss=8db6a8231178fdc8e3dfa306a5bae77e; sid_ucp_sso_v1=1.0.0-KGE1MzdhODc4NWFmNGQwN2E4YzI1Mjk4MDIzNjRmZDA3Yzg0MmRjNjQKHQiLyMDP9wIQmbCwlQYYlk4gDDDGjcrZBTgGQPQHGgJsZiIgOGRiNmE4MjMxMTc4ZmRjOGUzZGZhMzA2YTViYWU3N2U; ssid_ucp_sso_v1=1.0.0-KGE1MzdhODc4NWFmNGQwN2E4YzI1Mjk4MDIzNjRmZDA3Yzg0MmRjNjQKHQiLyMDP9wIQmbCwlQYYlk4gDDDGjcrZBTgGQPQHGgJsZiIgOGRiNmE4MjMxMTc4ZmRjOGUzZGZhMzA2YTViYWU3N2U; odin_tt=39dbbe6213490e0ee5a66b4c71202e7ecfd80acb4665e3ad32fd7b5ac72da05af41d0fc16b1d578522d03471afece3b6a9632ffdb9e394ff0b30d74b31845a2d; sid_guard=8db6a8231178fdc8e3dfa306a5bae77e%7C1655445531%7C5184000%7CTue%2C+16-Aug-2022+05%3A58%3A51+GMT; uid_tt=43cfc00e2b53d2a35807cd32202d7b08; uid_tt_ss=43cfc00e2b53d2a35807cd32202d7b08; sid_tt=8db6a8231178fdc8e3dfa306a5bae77e; sessionid=8db6a8231178fdc8e3dfa306a5bae77e; sessionid_ss=8db6a8231178fdc8e3dfa306a5bae77e; sid_ucp_v1=1.0.0-KDM2MmYzNjk1MTAwYzYyYjA2NzUzNWU1NGJjZjczNDg0OWVlYzgzOGIKHQiLyMDP9wIQm7CwlQYYlk4gDDDGjcrZBTgGQPQHGgJscSIgOGRiNmE4MjMxMTc4ZmRjOGUzZGZhMzA2YTViYWU3N2U; ssid_ucp_v1=1.0.0-KDM2MmYzNjk1MTAwYzYyYjA2NzUzNWU1NGJjZjczNDg0OWVlYzgzOGIKHQiLyMDP9wIQm7CwlQYYlk4gDDDGjcrZBTgGQPQHGgJscSIgOGRiNmE4MjMxMTc4ZmRjOGUzZGZhMzA2YTViYWU3N2U; gfsitesid=OGRiNmE4MjMxMXwxNjU1NDQ1NTMyODR8fDEwMDgzMDAyODgxMQsLCwsLCwsLCwsL; gftoken=OGRiNmE4MjMxMXwxNjU1NDQ1NTMyODR8fDAGBgYGBgY; Hm_lpvt_fad7c1cf4f20c598e0b78b81566cbbc0=1655445739; _ga_PZ1MHZSCJ7=GS1.1.1655445475.6.1.1655445739.0; ttwid=1%7CtJ4N_0Vox0QK6nHvuP6F2EwjCFfSjW-0Cm_kkKMnBtA%7C1655445738%7C7d0e1abb48ae88a7f06729404b2edca9958beabf39ec128aeaed680a68c15016; _ga=GA1.2.72976711.1648699181",
        "x-csrf-token": "Hqp71EI_Z-I1lUwZGHNYGs11",
        "x-secsdk-csrf-token": "DOWNGRADE",
      },
      timeout: 60 * 1000
    }
  )

  if(res.data && res.data.statusCode == 0 && res.data.data) {
    if(Array.isArray(res.data.data.urls) && res.data.data.urls.length > 0) {
      return {
        code: 200,
        data: {
          url: res.data.data.urls[0]
        }
      }
    }
  }

  return {
    code: 500,
    data: {}
  }
}

export async function kuaishouUpload(formData) {
  const res = await axios.post(
    'https://music.kuaishou.com/rest/kd/music/musician/v2/upload/image',
    formData,
    {
      headers:{
        "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryfWXcLJzRJKAv72NW",
        "cookie": "did=web_8fd7185fb9a92362bb7842db5572239d; didv=1648705816557; userId=2620452474; kuaishou.web.api_st=ChNrdWFpc2hvdS53ZWIuYXBpLnN0EqABxbTcPAtT-tbAOOSIGVMUVIP-XEh62Y7qvqe6A2HybZGtf62C-F_C7Y2GPkgbIaizz5n3tL936g84KjZzL0IK8CblLTjBF4vgMyzRdgLRx-AIkAZGZecYZPJTLBXSPJB5Xj4HsYOHFE8YCqmWLISxCGfAteujGgOHmrPmf-vIHbFox6jl3-LwnAhSSgPwETXXteMsjffDAHN3qYwsPMJCxhoSUjUAnsMNQB-XR6joXoIhaTaJIiAWn4pPOA8g2YVa1UXkNsiTuw39ceaoeOtR17jPsisLvigFMAE; kuaishou.web.api_ph=81f274e71e50aea324ed51ec7bec11d87abb",
      },
      timeout: 60 * 1000
    }
  )

  if(res.data && res.data.result == 1) {
    if(Array.isArray(res.data.urls) && res.data.urls.length > 0) {
      return {
        code: 200,
        data: {
          url: res.data.urls[0].url
        }
      }
    }
  }

  return {
    code: 500,
    data: {}
  }
}

export async function kuaishouQiYeUpload(formData) {
  const res = await axios.post(
    'https://e-signature.kuaishou.com/esignature/api/files/upload',
    formData,
    {
      headers:{
        "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundarydElWST380hXlvGAB",
        "cookie": "did=web_8fd7185fb9a92362bb7842db5572239d; didv=1648705816557; userId=2620452474; kuaishou.web.api_st=ChNrdWFpc2hvdS53ZWIuYXBpLnN0EqABxbTcPAtT-tbAOOSIGVMUVIP-XEh62Y7qvqe6A2HybZGtf62C-F_C7Y2GPkgbIaizz5n3tL936g84KjZzL0IK8CblLTjBF4vgMyzRdgLRx-AIkAZGZecYZPJTLBXSPJB5Xj4HsYOHFE8YCqmWLISxCGfAteujGgOHmrPmf-vIHbFox6jl3-LwnAhSSgPwETXXteMsjffDAHN3qYwsPMJCxhoSUjUAnsMNQB-XR6joXoIhaTaJIiAWn4pPOA8g2YVa1UXkNsiTuw39ceaoeOtR17jPsisLvigFMAE; kuaishou.web.api_ph=81f274e71e50aea324ed51ec7bec11d87abb; Hm_lvt_86a27b7db2c5c0ae37fee4a8a35033ee=1654654672; apdid=4fb29643-a508-48c1-94d0-f6c758d430bfa79d4b4335703be6de53b7c4f3c6023c:1654654673:1; p-token=ee49c0b9e2c742c09daad536f2cd41911654654675540; Hm_lpvt_86a27b7db2c5c0ae37fee4a8a35033ee=1654654681",
      },
      timeout: 60 * 1000
    }
  )

  if(res.data && res.data.code == 0) {
    if(res.data.result) {
      return {
        code: 200,
        data: {
          url: `https://e-signature.kuaishou.com/esignature/api/files/seals/preview/${res.data.result.id}`
        }
      }
    }
  }

  return {
    code: 500,
    data: {}
  }
}

export async function hupuUpload(formData) {
  const res = await axios.post(
    'https://bbs.hupu.com/postnew/multiUpload',
    formData,
    {
      headers:{
        "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryyD0ULjG6deVMB6vl",
        "cookie": "_HUPUSSOID=d94a2f84-91c4-41ac-842f-d5f239920c92; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22180ca78df3aca0-00cf4216e561b1c-17333270-3110400-180ca78df3bb87%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%22180ca78df3aca0-00cf4216e561b1c-17333270-3110400-180ca78df3bb87%22%7D; _CLT=b0c2a05996d8b48b354e1fa4ddfc1fef; u=96443712|6JmO5omRSlIwNTQ2MzgxMzU1|3e9b|747bce717c7fc06a3e7254fadb4c9896|688674512f88ea66|aHVwdV82Nzg4OTA2N2M5MDA3ODE0; us=d49813da5e0b1c1dd1f7d324b3b49f239fa3e9ad5add0d2b6888d8a90d32a9f3dd70f61f64786ee53cfdc1f9aa408a810035a6049237ce874ab445ab008b8936; smidV2=20220608151927538dad49ce0fd9d77ac266e939ff624a005ae6a90791d0480; ua=127282520; Hm_lvt_4fac77ceccb0cd4ad5ef1be46d740615=1652664357,1654135051,1654672777; Hm_lvt_b241fb65ecc2ccf4e7e3b9601c7a50de=1652664357,1654135051,1654672777; Hm_lpvt_b241fb65ecc2ccf4e7e3b9601c7a50de=1654672792; Hm_lpvt_4fac77ceccb0cd4ad5ef1be46d740615=1654672792; acw_tc=2f624a3616546727937608220e5f22d80c06c636bb5ce8a87faae6493a3ab6; csrfToken=2w8rJdkqKn7I07llbRHplR2d; Hm_lvt_df703c1d2273cc30ba452b4c15b16a0d=1652664361,1654135100,1654672795; Hm_lpvt_df703c1d2273cc30ba452b4c15b16a0d=1654672805; .thumbcache_33f5730e7694fd15728921e201b4826a=K97YFp+amvCA5f13Uw8RWiUhslwmDZtL8wLclsnagwsGdgt4Ptm5DDAnoikSgtBujxp+xJZZuHWoRKAiBHxftg%3D%3D",
        "x-csrf-token": "2w8rJdkqKn7I07llbRHplR2d",
        "encry_uid": "62687529845867",
      },
      timeout: 60 * 1000
    }
  )

  if(Array.isArray(res.data) && res.data.length > 0) {
    return {
      code: 200,
      data: {
        url: res.data[0]
      }
    }
  }

  return {
    code: 500,
    data: {}
  }
}

