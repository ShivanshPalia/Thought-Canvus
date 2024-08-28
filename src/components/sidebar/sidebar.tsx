
import { Link } from "@nextui-org/react";
import ImageSidebar from "@/utility/ioann-mark-kuznietsov-P6uqpNyXcI4-unsplash.jpg"
const Sidebar = () => {
  return (
    <div className="p-2  text-black rounded-lg shadow-lg">
      <div className="mb-4">
        <img className="" src="https://images.unsplash.com/photo-1495640452828-3df6795cf69b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJsb2d8ZW58MHx8MHx8fDA%3D" alt=""  />

        {/* <SidebarImage /> Replace with your sidebar image component */}
      </div>
      <div className="mb-4">
        <p className="font-bold text-lg">
          Welcome to Blogs Community! Discover insightful blogs, engaging podcasts, and captivating videos.
        </p>
      </div>
      <div className="space-y-2">
        {[ "Podcasts", "Videos", "Articles", "Events", "Community", "Resources", "Support"].map((item, index) => (
          <Link key={index} className="block px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors ">
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
