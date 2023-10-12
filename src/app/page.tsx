import MainNav from "@/components/MainNav";
import Search from "@/components/Search";
import TeamSwitcher from "@/components/TeamSwitcher";
import UserNav from "@/components/UserNav";

export default function Dashboard() {
  return (
    <>
      <div className="flex-col hidden md:flex">
        <div className="flex justify-between border-b">
          <div className="flex items-center h-16 px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
          </div>
          <div className="flex items-center mr-4 gap-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
    </>
  );
}
