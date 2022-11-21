import React from "react";
import Link from "next/link";
import Image from "next/image";

const listPaymentIcon = [
  "visa_icon",
  "payPal_icon",
  "american-express_icon",
  "apple-pay_icon",
  "klarna-gb_icon",
  "mastercard_icon",
  "afterpay_new_icon",
];

const PaymentSection = () => {
  return (
    <div className="w-full hidden  md:flex gap-14 my-5">
      <ul className="flex w-[50%] xl:w-[75%] gap-12 items-center justify-end border-r-[1px] border-gray-300 pr-14">
        <li>
          <Link href="/">
            <img src="/icons/facebook_icon.svg" alt="facebook" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <img src="/icons/instagram_icon.svg" alt="facebook" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <img src="/icons/snapchat_icon.svg" alt="facebook" />
          </Link>
        </li>
      </ul>
      <ul className="flex w-full gap-9 items-center">
        {listPaymentIcon.map((icon) => {
          return (
            <li key={icon}>
              <Image width={32} height={20} src={`/images/${icon}.png`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PaymentSection;
