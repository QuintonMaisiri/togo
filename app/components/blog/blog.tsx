import BlogCard from "./blog_card";
import HostCard from "./host_card";

export default function Blog() {
    return (
        <div className="p-4 md:p-10 lg:p-28">
            <h2 className="text-lg text-green text-center">BLOGS</h2>
            <h1 className="text-5xl md:text-center font-bold mb-10">Explore Our Latest Blogs</h1>
            <div className="flex overflow-x-scroll">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>

            <div className="mt-10">
                <h2 className="text-lg text-green">HOST</h2>
                <h1 className="text-5xl font-bold mb-10">Our Best <br />Hosts Of The Year</h1>
                <div className="flex overflow-x-scroll">
                   <HostCard />
                   <HostCard />
                   <HostCard />
                   <HostCard />
                </div>
            </div>

        </div>
    )
}