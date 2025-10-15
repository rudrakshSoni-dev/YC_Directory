"use client";

import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Skeleton } from "@/components/ui/skeleton"; // ✅ your UI skeleton, not @sanity/ui

const StartupCard = ({ post }) => {
  const { _createdAt, views, author, title, category, _id, image, description } = post;

  const authorId = author?.authorId;
  const authorName = author?.name;
  const imageUrl = image?.asset?.url || "https://placehold.co/600x400";
  const authorImageUrl = author?.image || "https://placehold.co/48x48";

  return (
    <li className="startup-card group">
      {/* Date & Views */}
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex items-center gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      {/* Author & Title */}
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{authorName}</p>
          </Link>

          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>

        {/* Author Image */}
        <Link href={`/user/${authorId}`}>
          <Image
            src={authorImageUrl}
            alt={authorName || "Author"}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        </Link>
      </div>

      {/* Post Image & Description */}
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <img src={imageUrl} alt={title} className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index) => (
      <li key={index} className="skeleton">
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);
