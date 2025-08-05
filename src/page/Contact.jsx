import { Grid, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
const Contact = () => {
  const [mounted, setMounted] = useState(false);

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  useEffect(() => {
    setMounted(true);
  }, []);
  const accordionData = [
    {
      id: 1,
      text: "What is Sync360?",
      content:
        "  Sync360 is an all-in-one inventory and business management software designed to help you track stock, monitor sales, record expenses, receive payments, automate marketing, manage an online storefront, and secure your business with optional insurance coverage.",
    },
    {
      id: 2,
      text: "Who is Sync360 built for?",
      content:
        " Sync360 is perfect for retail shops, supermarkets, logistics firms, fashion outlets, automobile part stores, pharmacies, and small to medium-sized businesses that need better control over inventory, expenses, and sales",
    },
    {
      id: 3,
      text: " Can I manage multiple branches or team members with one account",
      content:
        "Yes. Sync360 allows multi-branch support and team management. You can add staff with specific roles and permissions for secure operations.",
    },
    {
      id: 4,
      text: "What makes Sync360 different from other inventory apps",
      content:
        "Beyond inventory tracking, Sync360 offers features like expense monitoring, real-time sales analysis, online storefront creation, in-app payment solutions, business insurance options, and built-in marketing automation  ",
    },
    {
      id: 5,
      text: "How does the insurance feature work?",
      content:
        "Sync360 partners with insurance providers to help businesses secure their stock and assets against fire, theft, or loss. This comes with an option to include it in your subscription. You can apply for coverage directly within the app.",
    },
    {
      id: 6,
      text: "What is the marketing automation feature about?",
      content:
        "Sync360 helps you boost sales by automating messages, promos, and alerts to your customers via SMS, email, or in-app notifications. You can set up campaigns and let the system handle the rest",
    },
    {
      id: 7,
      text: "Is Sync360 available on mobile and web?",
      content:
        "Yes. You can use Sync360 via the mobile app (iOS & Android) or directly through your web browser. Your data syncs across all devices in real-time.",
    },
    {
      id: 8,
      text: " Is my data secure on Sync360?",
      content:
        "Absolutely. Sync360 uses encrypted cloud storage, secure backups, and multi-layered security to ensure your business data is safe",
    },
    {
      id: 9,
      text: "How much does it cost to use Sync360?",
      content:
        "We offer a free trial, after which you can choose from flexible subscription plans based on your business size and needs. Payment options include card, bank transfer, and in-app wallet",
    },
    {
      id: 10,
      text: "How do I get started and get help if needed?",
      content:
        "Getting Started is Easy! Download the app or visit business.sync360.africa to sign up.Need help? Access our video tutorials and onboarding guides, or contact our support team via WhatsApp at +234 814 269 9290 or email support@sync360.africa.",
    },
  ];
  return (
    <>
      <Navbar />

      <div className="flex_column_center text-center w-[90%] md:w-[1200px] py-4 mx-auto gap-4 mt-[10%] md:mt-[3%] justify-center">
        <Grid container spacing={"10px"}>
          <Grid item xs={12} md={12}>
            <div className="flex flex-col items-center text-center">
              <p className="text-[25px] font-[600] md:text-[30px] md:font-[600] mb-1">
                Contact Us
              </p>
              <p className="text-[14px] font-[400] md:text-[20px] md:font-[400] mb-6">
                Have Questions? Talk to our customer support team.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="flex_column p-3 border-slate-200 border rounded-md">
              <div className="flex_start gap-4">
                {/* <img
                  alt="contact"
                  className="pt-1 md:pt-0"
                /> */}
                <div className="flex_column gap-2">
                  <p className="text-[20px] font-[600] text-primary_black ">
                    WhatApp
                  </p>

                  <Link to="https://wa.me/message/BEC7OOFPUWZZK1">
                    <p className="text-primary_green underline cursor-pointer font-[500] text-[15px]">
                      Click here to start chat.
                    </p>
                  </Link>
                  <p className="text-primary_gray font-normal text-[12px]">
                    Sunday - Saturday
                  </p>
                  <p className="text-primary_gray font-normal text-[12px]">
                    9 am - 9 pm
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="flex_column p-3 border-slate-200 border rounded-md">
              <div className="flex_start gap-4">
                {/* <Image
                  width={25}
                  height={25}
                  src="/contact/c-2.svg"
                  alt="contact"
                  className="pt-1 md:pt-0"
                /> */}
                <div className="flex_column gap-2">
                  <p className="text-[20px] font-[600] text-primary_black ">
                    Call
                  </p>

                  <p className="text-primary_black  font-[500] text-[15px]">
                    +234 814 269 9290
                  </p>
                  <p className="text-primary_gray font-normal text-[12px]">
                    Sunday - Saturday
                  </p>
                  <p className="text-primary_gray font-normal text-[12px]">
                    9 am - 9 pm
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="flex_column p-3 border-slate-200 border rounded-md">
              <div className="flex_start gap-4">
                {/* <Image
                  width={25}
                  height={25}
                  src="/contact/c-3.svg"
                  alt="contact"
                  className="pt-1 md:pt-0"
                /> */}
                <div className="flex_column gap-2">
                  <p className="text-[20px] font-[600] text-primary_black ">
                    Email
                  </p>

                  <p className="text-primary_black  font-[500] text-[15px]">
                    Partners@sync360.africa
                  </p>
                  <p className="text-primary_gray font-normal text-[12px]">
                    Sunday - Saturday
                  </p>
                  <p className="text-primary_gray font-normal text-[12px]">
                    9 am - 9 pm
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>

        {mounted && (
          <div className="w-full md:w-[65%] mx-auto flex flex-col items-center mt-[20%] md:mt-[10%] text-center">
            <p className="font-[600] text-[25px] md:text-[30px] text-primary_black mb-5">
              Frequently Asked Questions
            </p>
            {accordionData.map((item) => (
              <Accordion
                key={item.id}
                expanded={expanded === item.id}
                onChange={handleChange(item.id)}
                sx={{ width: "100%" }}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === item.id ? (
                      <RemoveRoundedIcon />
                    ) : (
                      <AddRoundedIcon />
                    )
                  }
                  aria-controls={`panel${item.id}-content`}
                  id={`panel${item.id}-header`}
                >
                  <Typography
                    className="text-start text-[14px] md:text-[18px]"
                    sx={{
                      fontWeight: "600",
                      color: "#171717",
                    }}
                  >
                    {item.id}. {item.text}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {item.content && typeof item.content === "object" ? (
                      <div>
                        {Object.values(item.content).map((text, index) => (
                          <Typography
                            className="text-start text-[13px] md:text-[15px]"
                            key={index}
                          >
                            . {text}
                          </Typography>
                        ))}
                      </div>
                    ) : (
                      item.content
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
