import Image from 'next/image';

const iconData = [
  {
    title: 'Dashboard',
    src: '/icon/dashboard-icon.svg',
  },
  {
    title: 'Task',
    src: '/icon/task-icon.svg',
  },
  {
    title: 'Projects',
    src: '/icon/project-icon.svg',
  },
  {
    title: 'Schedule',
    src: '/icon/schedule-icon.svg',
  },
];

const DashboardLeft = () => {
  return (
    <div className="bg-[#0D0F10] max-w-[312px] rounded-[16px] py-5 px-3">
      <div className="flex justify-between mb-8">
        <Image src="/image/logo.png" alt="logo" width={120} height={30} />
        <button title="back" className="rounded-full w-8 h-8 bg-[#1A1D21]">
          <Image src="/icon/left-arrow-icon.svg" alt="back-icon" width={12} height={12} className="ml-[10px]" />
        </button>
      </div>

      <div
        className="h-[1px] bg-[background: #282828;
] mb-8"
      ></div>

      <div className="flex flex-col gap-3">
        {iconData.map(data => (
          <div key={data.title} title="button" className="p-3 rounded-xl bg-[#B6F09C] flex gap-3">
            <Image src={data.src} alt="icon" width={24} height={24} />
            <p>{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardLeft;
