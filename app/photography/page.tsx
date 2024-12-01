"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import styles from "./PhotographyPage.module.css";
import { Info } from "lucide-react";
import { motion } from "framer-motion";

interface ImageMetadata {
    location: string;
    camera: string;
    focalLength: string;
    aperture: string;
    shutterSpeed: string;
    iso: string;
    date: string;
}

const imageVariants = {
    hidden: { opacity: 0.8, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

export default function PhotographyPage() {
    const [showMetadata, setShowMetadata] = useState(false);
    const [selectedImageMetadata, setSelectedImageMetadata] = useState<ImageMetadata | null>(null);

    const openMetadata = (metadata: ImageMetadata) => {
        setSelectedImageMetadata(metadata);
        setShowMetadata(true);
    };

    const closeMetadata = () => {
        setShowMetadata(false);
        setSelectedImageMetadata(null);
    };

    const images = [
        {
            src: "/APC_0108-hdr.png",
            metadata: {
                location: "Vancouver BC, Canada",
                camera: "iPhone 12 Pro Max",
                focalLength: "5 mm",
                aperture: "f/1.6",
                shutterSpeed: "1/18000s",
                iso: "ISO-50",
                date: "12/22/2023 3:42PM"
            }
        },
        {
            src: "/APC_0222-hdr.png",
            metadata: {
                location: "Dallas, TX, USA",
                camera: "iPhone 12 Pro Max",
                focalLength: "5mm",
                aperture: "f/1.6",
                shutterSpeed: "1/25000s",
                iso: "ISO-32",
                date: "5/9/2024 12:11pm"
            }
        },
        {
            src: "/APC_0147-hdr.png",
            metadata: {
                location: "Vancouver BC, Canada",
                camera: "iPhone 12 Pro Max",
                focalLength: "5 mm",
                aperture: "f/1.6",
                shutterSpeed: "1/320s",
                iso: "ISO-50",
                date: "12/22/2023 4:25pm"
            }
        }
    ];

    return (
        <div className={styles.scrollContainer}>
            {images.map((image, index) => (
                <div className={styles.imageSection} key={index}>
                    <motion.div
                        className={styles.imageWrapper}
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <Image
                            src={image.src}
                            width={500}
                            height={500}
                            alt=""
                            className="rounded-lg mb-2"
                        />
                        <Button
                            className={styles.metadataButton}
                            onClick={() => openMetadata(image.metadata)}
                        >
                            <Info />
                        </Button>
                    </motion.div>
                </div>
            ))}

            <Dialog open={showMetadata} onOpenChange={closeMetadata}>
                <DialogContent className={styles.dialogContent}>
                    <DialogHeader>
                        <DialogTitle>Image Metadata</DialogTitle>
                    </DialogHeader>
                    {selectedImageMetadata && (
                        <DialogDescription>
                            <p><strong>Location:</strong> {selectedImageMetadata.location}</p>
                            <p><strong>Camera:</strong> {selectedImageMetadata.camera}</p>
                            <p><strong>Focal Length:</strong> {selectedImageMetadata.focalLength}</p>
                            <p><strong>Aperture:</strong> {selectedImageMetadata.aperture}</p>
                            <p><strong>Shutter Speed:</strong> {selectedImageMetadata.shutterSpeed}</p>
                            <p><strong>ISO:</strong> {selectedImageMetadata.iso}</p>
                            <p><strong>Date:</strong> {selectedImageMetadata.date}</p>
                        </DialogDescription>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}