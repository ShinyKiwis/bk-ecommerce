import IconStyle from "./Icon.module.css"

const Icon = ({Icon, onClick}) => {
  return (
    <div className={IconStyle.icon_container}>
      <Icon size="2em" onClick={onClick}/>
    </div>
  )
}

export default Icon
