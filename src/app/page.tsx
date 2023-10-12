import CalendarDateRangePicker from "@/components/CalendarDateRangePicker";
import MainNav from "@/components/MainNav";
import Search from "@/components/Search";
import TeamSwitcher from "@/components/TeamSwitcher";
import UserNav from "@/components/UserNav";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  return (
    <>
      <div className="flex-col hidden md:flex">
        <div className="border-b">
          <div className="flex items-center h-16 px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="flex items-center ml-auto gap-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 p-8 pt-6 space-y-4 ">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="space-x-2">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">Overview Content</TabsContent>
            <TabsContent value="analytics">Analitics Content</TabsContent>
            <TabsContent value="reports">Reports Content</TabsContent>
            <TabsContent value="notifications">
              Notifications Content
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
