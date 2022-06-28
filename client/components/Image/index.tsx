import classNames from "classnames"

interface Props {
  className?: string
  src: string
  alt: string
}

export function Image(props: Props) {
  return (
    <img
      className={classNames([
        // "lazy",
        // "lazyloaded",
        props.className
      ],)}
      // data-src="https://www.qbqbb.cn/upload/vod/20220605-1/b7dfa0c0fd97bb27fc27902fd31478a1.jpg"
      src={props.src}
      alt={props.alt}
    />
  )
}