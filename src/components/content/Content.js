import LeftColumn from "./left"
import CentrColumn from "./center"
import RightColumn from "./right"

export default function Content() {
  return (
    <div className="flex justify-between bg-green-400 h-screen">
      <LeftColumn />
      <CentrColumn />
      <RightColumn />
    </div>
  )
}