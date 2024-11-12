"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import styles from "./PhotographyPage.module.css";
import { Info } from "lucide-react";
export default function PhotographyPage() {
    const [showMetadata, setShowMetadata] = useState(false);
    const [selectedImageMetadata, setSelectedImageMetadata] = useState(null);

    const openMetadata = (metadata) => {
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
                    <div className={styles.imageWrapper}>
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
                    </div>
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
