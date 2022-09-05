

const SectionHead = ({icon,tittle,className}) => {
  return (
   <div className={`section__head ${className}`}>
   <span>{icon}</span>
   <h2>{tittle}</h2>
</div>
  )
}

export default SectionHead