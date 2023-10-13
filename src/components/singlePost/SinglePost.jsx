import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="single">
        <div className="singlePostWrapper">
            <img className="singlePostImage" src="https://blog.paessler.com/hubfs/cdn-blue-1.png" alt="" />
            <h1 className="singlePostTitle">
                Content Delivery Network
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo" >
                <span className="singlePostAuthor">Author: <b>Safak</b></span>
                <span className="singlePostDate">1 hour </span>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Magni molestiae perspiciatis dolore nisi est odit ipsum ab odio quibusdam esse quaerat qui architecto laborum alias, 
                optio id ipsa expedita tenetur.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Magni molestiae perspiciatis dolore nisi est odit ipsum ab odio quibusdam esse quaerat qui architecto laborum alias, 
                optio id ipsa expedita tenetur.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Magni molestiae perspiciatis dolore nisi est odit ipsum ab odio quibusdam esse quaerat qui architecto laborum alias, 
                optio id ipsa expedita tenetur.
            </p>
        </div>
    </div>
  )
}
