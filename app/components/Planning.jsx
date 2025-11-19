"use client";

import { motion } from "motion/react";
import { CalendarCheck, Layers, Link, NotepadText } from "lucide-react";

function Planning() {
  return (
    <div className="w-10/12 mx-auto py-10">
      <motion.h2
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-2xl leading-16 font-bold mb-4"
      >
        برنامه ریزی و مشاوره تحصیلی
      </motion.h2>

      <div>
        <motion.ul
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-4 gap-6  my-2"
        >
          <li className="border border-gray-400 border-b-6 border-b-rose-600 hover:border-b-0 group p-6 rounded-md flex flex-col gap-2 justify-baseline hover:bg-gray-700 transition duration-300 hover:shadow-[-2px_4px_0px_white] cursor-pointer max-w-sm min-w-[25%]">
            <CalendarCheck
              size={50}
              className="text-rose-500 group-hover:text-white transition duration-300"
            />
            <h4 className="text-md font-semibold mt-2">
              ایجاد برنامه مطالعاتی
            </h4>
            <p className="font-light text-sm mt-2">
              امکان شخصی سازی براساس ساختار مجموعه
            </p>
          </li>
          <li className="border border-gray-400 border-b-6 border-b-rose-600 hover:border-b-0 group p-6 rounded-md flex flex-col gap-2 justify-baseline  hover:bg-gray-700 transition duration-300 hover:shadow-[-2px_4px_0px_white] cursor-pointer min-w-[25%]">
            <NotepadText size={50} className="text-rose-500" />
            <h4 className="text-md font-semibold mt-2">
              دریافت گزارش مطالعه روزانه دانش آموز
            </h4>
            <p className="font-light text-sm mt-2">
              ثبت نظر مشاور، ارسال پیام خودکار براساس عملکرد دانش آموز
            </p>
          </li>
          <li className="border border-gray-400 border-b-6 border-b-rose-600 hover:border-b-0 group p-6 rounded-md flex flex-col gap-2 justify-baseline  hover:bg-gray-700 transition duration-300 hover:shadow-[-2px_4px_0px_white] cursor-pointer">
            <Layers size={50} className="text-rose-500" />
            <h4 className="text-md font-semibold mt-2">
              مدیریت و برگزاری جلسات مشاوره
            </h4>
            <p className="font-light text-sm mt-2">
              اتصال به اسکای روم، ثبت گزارش جلسات
            </p>
          </li>
          <li className="border border-gray-400 border-b-6 border-b-rose-600 hover:border-b-0 group p-6 rounded-md flex flex-col gap-2 justify-baseline hover:bg-gray-700 transition duration-300 hover:shadow-[-2px_4px_0px_white] cursor-pointer">
            <Link size={50} className="text-rose-500" />
            <h4 className="text-md font-semibold mt-2">
              ایجاد عادت های رفتاری (مطالعاتی - رفتاری)
            </h4>
            <p className="font-light text-sm mt-2">
              مدیریت استفاده از موبایل ، مدیریت ساعت خواب ، انجام تست روزانه
            </p>
          </li>
        </motion.ul>
      </div>
    </div>
  );
}

export default Planning;
