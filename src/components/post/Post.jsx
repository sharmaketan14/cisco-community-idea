import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImage" src="https://rms.koenig-solutions.com/Sync_data/CCE_Logo/2793-ciscoccna.jpgL.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor</span>
                <hr />
                <span className="postDate">1 Hour Ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates nostrum molestiae unde natus labore mollitia veritatis sed, rerum nam officia quasi ut fuga? Minus, quibusdam sint. 
                Dolorum fugit officia minima.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates nostrum molestiae unde natus labore mollitia veritatis sed, rerum nam officia quasi ut fuga? Minus, quibusdam sint. 
                Dolorum fugit officia minima.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates nostrum molestiae unde natus labore mollitia veritatis sed, rerum nam officia quasi ut fuga? Minus, quibusdam sint. 
                Dolorum fugit officia minima.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates nostrum molestiae unde natus labore mollitia veritatis sed, rerum nam officia quasi ut fuga? Minus, quibusdam sint. 
                Dolorum fugit officia minima.
            </p>
        </div>
    )
}
