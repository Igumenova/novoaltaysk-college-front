"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./NewsImageCarousel.module.scss";

type ImageFormat = {
  url: string;
  width: number;
  height: number;
};

type NewsImage = {
  alternativeText?: string | null;
  url: string;
  formats?: {
    medium?: ImageFormat;
    [key: string]: ImageFormat | undefined;
  };
};

type Props = {
  images: NewsImage[];
};

export default function NewsImageCarousel({ images }: Props) {
  const baseUrl = process.env.STRAPI_API_URL || "";

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

  function openModal(imageUrl: string) {
    setModalImageUrl(imageUrl);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setModalImageUrl("");
  }

  return (
    <>
      <div className={styles.carousel}>
        {images.map((image, i) => {
          const selectedFormat = image.formats?.medium;
          const imageUrl = selectedFormat?.url || image.url;
          const width = selectedFormat?.width || 750;
          const height = selectedFormat?.height || 750;

          return (
            <div
              key={i}
              className={styles.imageWrapper}
              onClick={() => openModal(`${baseUrl}${imageUrl}`)}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={`${baseUrl}${imageUrl}`}
                alt={image.alternativeText || "Новость"}
                width={width}
                height={height}
                style={{ objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>

      {modalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            {/* Показываем ту же картинку без изменения размеров */}
            <Image
              src={modalImageUrl}
              alt="Открытое изображение"
              width={500}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
