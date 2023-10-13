import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="" alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quia maiores impedit 
                officiis aperiam, voluptatem, in hic ipsam iste, ratione 
                consequuntur praesentium. Enim aperiam tempore autem praesentium 
                suscipit molestias cumque.
            </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Lifestyle</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Style</li>
        </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
