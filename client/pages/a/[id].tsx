import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useImperativeHandle, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { getRecommendList } from '../../api/recommend'
import { globalStore } from '../../store/global'
import { RecommendList, RecommendListChildren } from '../../types/recommend'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const result = await getRecommendList({})

  if(result.code === 200) {
    return {
      props: {
        list: result.data!.list
      }
    }
  }

  return {
    props: {},
  }
}

export default function Page(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const logPropsRef = useRef(null)

  const [ globalState, setGlobalState ] = useRecoilState(globalStore)

  useEffect(() => {
    (logPropsRef.current as any).fun()
  }, [])

  return (
    <>
      我是一个动态路由
      <br />
      参数
      {
        props.list?.map(item => (
          <Com
            key={item.id}
            RecommendList={ item }
            left={(
              <span>我是一个left插槽</span>
            )}
            right={(
              <span>我是一个right插槽</span>
            )}
            cb={(a) => console.log(a)}
          ><div>2321312</div></Com>
        ))
      }

      <LogProps ref={logPropsRef} />

      <div>{ globalState.b }</div>

      <button onClick={() => setGlobalState(state => ({
        ...state,
        b: '我修改了B' + state.a,
        a: state.a + 1
      }))}>写入</button>
    </>
  )
}

// interface ComProps extends RecommendList {
//   children?: React.ReactNode
//   left?: React.ReactNode
//   right?: React.ReactNode
// }

// interface ComProps {
//   children?: React.ReactNode
//   RecommendList: RecommendList
//   left?: React.ReactNode
//   right?: React.ReactNode
// }

// // 无状态组件  纯函数
// function Com(props: ComProps) {
//   return (
//     <div>
//       <div></div>
//       { props.RecommendList.recommendName }
//       { props.children }

//       {props.left}

//       {props.right}
//     </div>
//   )
// }


interface ComProps {
  children?: React.ReactNode
  RecommendList: RecommendList
  left?: React.ReactNode
  right?: React.ReactNode
  cb?: (a: number) => void
}

// 无状态组件  纯函数
function Com(props: ComProps) {
  const [ globalState, setGlobalState ] = useRecoilState(globalStore)

  return (
    <div>
      <div></div>
      { props.RecommendList.recommendName }
      { props.children }

      {props.left}

      {props.right}

      <div style={{ color: "blue" }}>{ globalState.b }</div>
    </div>
  )
}

const LogProps = React.forwardRef((props: any, ref: any) => {
  useImperativeHandle(ref, () => ({
    fun() {
      console.log("调用子组件方法")
    }
  }))

  return
})




// function add(a: number) {
//   return a + 1;
// }

// add(1) //2
