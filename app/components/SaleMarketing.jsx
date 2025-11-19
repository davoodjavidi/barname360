"use client";
import {
  CalendarArrowDown,
  Gamepad2,
  HatGlasses,
  Headset,
  ListChecks,
  MonitorPlay,
  NotepadText,
  ShoppingBag,
  Wallet,
} from "lucide-react";
import { motion } from "motion/react";

function SaleMarketing() {
  return (
    <div className="w-10/12 mx-auto py-10">
      <motion.h2
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl leading-16 font-bold"
      >
        فروش و بازاریابی
      </motion.h2>
      <p className="mb-4">
        پلتفرم برنامه 360 تمام ابزارهای مورد نیاز برای فروش و بازاریابی را در
        اختیار شما قرار می دهد تا بتوانید فروش خود را چند برابری کنید.
      </p>

      <div>
        <motion.ul
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2"
        >
          {/* first li */}
          <li className="border border-gray-400 px-6 py-4 rounded-md flex gap-4 items-center justify-start hover:bg-gray-700 transition duration-300 hover:shadow-[-2px_4px_0px_white] cursor-pointer min-w-[25%]">
            <ShoppingBag className="text-green-700 size-12" />
            <div>
              <h4 className="text-md font-semibold mt-2">
                تعریف و فروش محصول های متنوع
              </h4>
              <p className="font-light text-sm mt-2 text-gray-200 leading-6">
                ایجاد محصولات با چیدمان و سناریوهای مختلف – تعریف براساس بازه
                زمانی یا تاریخ انقضا – امکان فروش به صورت اقساطی – امکان فروش
                دوره های اسپات پلیر
              </p>
            </div>
          </li>
          <li className="border border-gray-400 px-6 py-4 rounded-md flex gap-4 items-center justify-start hover:bg-gray-700 transition duration-300 hover:shadow-[-2px_4px_0px_white] cursor-pointer min-w-[25%]">
            <Headset className="text-green-700 size-12" />
            <div>
              <h4 className="text-md font-semibold mt-2">اتصال به CRM</h4>
              <p className="font-light text-sm mt-2 text-gray-200 leading-6">
                امکان اتصال به سامانه های مدیریت مشتریان برای تشکیل مرکز تماس
                (Call Center) برای بازاریابی تلفنی
              </p>
            </div>
          </li>

          <li className="border border-gray-400 px-6 py-4 rounded-md flex gap-4 items-center justify-start hover:bg-gray-700 transition duration-300 hover:shadow-[-2px_4px_0px_white] cursor-pointer min-w-[25%]">
            <HatGlasses className="text-green-700 size-12" />
            <div>
              <h4 className="text-md font-semibold mt-2">
                ثبت فعالیت های دانش آموز در وب اپلیکیشن
              </h4>
              <p className="font-light text-sm mt-2 text-gray-200 leading-6">
                با ثبت فعالیت و رفتار دانش آموز شناخت خود را نسبت به دانش آموز
                افزایش دهید و احتمال فروش را افزایش دهید.
              </p>
            </div>
          </li>
          <li className="border border-gray-400 px-6 py-4 rounded-md flex gap-8 items-center justify-start hover:bg-gray-700 transition duration-300 hover:shadow-[-2px_4px_0px_white] cursor-pointer min-w-[25%]">
            <CalendarArrowDown className="text-green-700 size-8" />
            <div>
              <h4 className="text-md font-semibold mt-2">
                سیستم نوبت دهی تک جلسه ای
              </h4>
              <p className="font-light text-sm mt-2 text-gray-200 leading-6">
                مدیریت و نوبت دهی جلسات رایگان و پولی برای برگزاری جلسات جذب
              </p>
            </div>
          </li>

          <li className="border border-gray-400 px-6 py-4 rounded-md flex gap-4 items-center justify-start hover:bg-gray-700 transition duration-300 hover:shadow-[-2px_4px_0px_white] cursor-pointer min-w-[25%]">
            <Wallet className="text-green-700 size-12" />
            <div>
              <h4 className="text-md font-semibold mt-2">فروش اقساطی</h4>
              <p className="font-light text-sm mt-2 text-gray-200 leading-6">
                با توجه به شرایط مالی با فروش اقساطی فروش خود را افزایش دهید و
                به کمک ایجاد محدودیت های دسترسی به خدمات، احتمال بازپرداخت اقساط
                را افزایش دهید.
              </p>
            </div>
          </li>
          <li className="border border-gray-400 px-6 py-4 rounded-md flex gap-4 items-center justify-start hover:bg-gray-700 transition duration-300 hover:shadow-[-2px_4px_0px_white] cursor-pointer min-w-[25%]">
            <MonitorPlay className="text-green-700 size-12" />
            <div>
              <h4 className="text-md font-semibold mt-2">برگزاری وبینار</h4>
              <p className="font-light text-sm mt-2 text-gray-200 leading-6">
                یک از راه های جمع آوری شماره تماس برای جذب، برگزاری وبینارهای
                رایگان می باشد که می توانید صفر تا صد (برگزاری تا جمع آوری شماهر
                تماس و در نهایت جذب را با برنامه 360 انجام دهید.
              </p>
            </div>
          </li>

          <li className="border border-gray-400 px-6 py-4 rounded-md flex gap-4 items-center justify-start hover:bg-gray-700 transition duration-300 hover:shadow-[-2px_4px_0px_white] cursor-pointer min-w-[25%]">
            <Gamepad2 className="text-green-700 size-12" />
            <div>
              <h4 className="text-md font-semibold mt-2">سیستم گیمیفیکشن</h4>
              <p className="font-light text-sm mt-2 text-gray-200 leading-6">
                برای ایجاد جذابیت و رقابت بین دانش آموزان و در نهایت هدایت دانش
                آموز به سمت خرید خدمات و محصولات بیشتر
              </p>
            </div>
          </li>
          <li className="border border-gray-400 px-6 py-4 rounded-md flex gap-4 items-center justify-start hover:bg-gray-700 transition duration-300 hover:shadow-[-2px_4px_0px_white] cursor-pointer min-w-[25%]">
            <ListChecks className="text-green-700 size-12" />
            <div>
              <h4 className="text-md font-semibold mt-2">فرم ساز اختصاصی</h4>
              <p className="font-light text-sm mt-2 text-gray-200 leading-6">
                برای جمع آوری اطلاعات دانش آموز در یک بستر متمرکز و استفاده تیم
                بازاریابی
              </p>
            </div>
          </li>
        </motion.ul>
      </div>
    </div>
  );
}

export default SaleMarketing;
