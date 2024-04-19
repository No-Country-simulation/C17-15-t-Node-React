import React from "react";
import { Card, CardHeader, CardBody, Avatar, Typography } from "@material-tailwind/react";

function TestimonialCard({ avatarSrc, avatarAlt, title, subtitle, bodyText, cardClassName, headerClassName }) {
  return (
    <Card color="transparent" shadow={false} className={`w-full max-w-[26rem] border-2 border-sky-500 px-5 py-1 ${cardClassName}`}>
      <CardHeader color="transparent" floated={false} shadow={false} className={`mx-0 flex items-center gap-4 pt-0 ${headerClassName}`}>
        <Avatar size="lg" variant="circular" src={avatarSrc} alt={avatarAlt} />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              {title}
            </Typography>
          </div>
          <Typography variant="h6" color="blue-gray" className="font-light">{subtitle}</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>{bodyText}</Typography>
      </CardBody>
    </Card>
  );
}

export default TestimonialCard;
