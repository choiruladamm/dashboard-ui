import TeamSwitcher from "@/components/TeamSwitcher";

export default function Dashboard() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}
