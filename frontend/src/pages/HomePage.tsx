import {useChatStore} from "../store/useChatStore";

const HomePage = () => {
  const {selectedUser} = useChatStore()
  
  
  return (
    <div className="h-screen bg-base-200">
      <div className=""></div>

    </div>
  )
}

export default HomePage