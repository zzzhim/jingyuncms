import type { NextPage, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { MiniHeader } from '../../components/MiniHeader'
import { VideoCardWrapper } from '../../components/VideoCardWrapper'
import { useRouter } from "next/router"
import { getCategoryList } from '../../api/recommend'
import { Daum } from "../../types/category";


function listToTree(myId: string, pId: string, list: string | any[]) {
  function exists(list: string | any[], parentId: any) {
    for (var i = 0; i < list.length; i++) {
      if (list[i][myId] == parentId) return true;
    }
    return false;
  }

  var nodes = [];
  // get the top level nodes
  for (var i = 0; i < list.length; i++) {
    var row = list[i];
    if (!exists(list, row[pId])) {
      nodes.push(row);
    }
  }

  var toDo = [];
  for (var i = 0; i < nodes.length; i++) {
    toDo.push(nodes[i]);
  }
  while (toDo.length) {
    var node = toDo.shift(); // the parent node
    // get the children nodes
    for (var i = 0; i < list.length; i++) {
      var row = list[i];
      if (row[pId] == node[myId]) {
        //var child = {id:row.id,text:row.name};
        if (node.children) {
          node.children.push(row);
        } else {
          node.children = [row];
        }
        toDo.push(row);
      }
    }
  }
  return nodes;
}
export const getServerSideProps = async () => {
  const result = await getCategoryList()
  let data: Daum[] = []

  if (result.code === 200 && result.data) {
    data = listToTree("id", "parentId", result.data)
    console.log(data);

  }

  return {
    props: { data },
  }
}
function Page(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  console.log(router);
  const num = router.query.id
  return (
    <>
      <div className='homepage'>
        <Header active={num} />
        {/* <MiniHeader /> */}

        {/* <main id="main" className="wrapper">
          <div className="content">
            <VideoCardWrapper />
          </div>
        </main> */}

        <div className='content'>
          {/* 头部分类 */}
          <div>

            {props.data?.map(item => (
              <div>
                {/* {
                  item.categoryName == '蓝光&4K' &&
                  
                } */}
              </div>
            ))}
          </div>

          {/* 视频列表 */}
          {/* 底部 */}
          <div className="module-footer module-type">
            <a href="/vodshow/JCCCCS-----------.html" className="load-all" title="全部综艺">全部综艺<i className="icon-arrow-right-o"></i></a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Page
