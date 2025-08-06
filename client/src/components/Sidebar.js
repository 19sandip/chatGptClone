import "./styles/sidebar.css";

const threads = [
    {title: "about java", id : "1"},
    {title: "about python", id : "2"},
    {title: "about js", id : "3"},
    {title: "about cpp", id : "4"},
    {title: "about c", id : "5"},
    {title: "about kotlin", id : "6"},
    {title: "about flutter", id : "7"},
    {title: "about docker", id : "8"},
    {title: "about mongodb", id : "9"},
    {title: "about socket.io", id : "10"},
    {title: "about socket.io", id : "10"},
    {title: "about socket.io", id : "10"},
    {title: "about socket.io", id : "10"},
    {title: "about socket.io", id : "10"},
    {title: "about socket.io", id : "10"},
    {title: "about socket.io", id : "10"},
    {title: "about socket.io", id : "10"},
    {title: "about socket.io", id : "10"},
    {title: "about socket.io", id : "10"},
    {title: "about socket.io", id : "10"},
    {title: "about socket.io", id : "10"},
   
]

const Sidebar = () => {
  return <div className="sidebar" id="sidebar">
           <div className="sidebar_header">
            <div className="chatGpt_logo_container">
             <img src="icons8-chatgpt.svg" alt="chat gpt icon" className="chatgpt_logo" ></img>
            </div>

            <div className="new_chat_btn">
               <button className="btn">New chat</button>
            </div>
           </div>

           <div className="chat_history">
            <div>
                {
                    threads.map(thread =>{
                        return(
                            <div className="thread">
                                {thread.title}
                            </div>
                        )
                    })
                }
            </div>
           </div>

  </div>;
};

export default Sidebar;
