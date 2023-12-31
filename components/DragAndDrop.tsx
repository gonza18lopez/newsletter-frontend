"use client";

import {
    faFileArchive,
    faFilePdf,
    faImage,
    faTimes,
    faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Group, Image, Text } from "@mantine/core";
import {
    Dropzone,
    DropzoneProps,
    FileWithPath,
    IMAGE_MIME_TYPE,
} from "@mantine/dropzone";
import { useState } from "react";

export default function DragAndDrop(props: Partial<DropzoneProps>) {
    const [files, setFiles] = useState<FileWithPath[]>([]);

    const previews = files.map((file, index) => {
        return (
            <FontAwesomeIcon
                key={index}
                icon={file.type === "image/png" ? faImage : faFilePdf}
                className="w-12 h-12"
            />
        );
    });

    return (
        <Dropzone
            onDrop={(files) => {
                setFiles(files);
                props.onChange?.(files.at(0) as any);
            }}
            onReject={(files) => console.log("rejected files", files)}
            maxSize={3 * 1024 ** 2}
            accept={["image/png", "application/pdf"]}
        >
            <Group
                justify="center"
                gap="xl"
                mih={100}
                style={{ pointerEvents: "none" }}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
                {!previews.length ? (
                    <>
                        <Dropzone.Accept>
                            <FontAwesomeIcon icon={faUpload} />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <FontAwesomeIcon icon={faTimes} />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <FontAwesomeIcon icon={faFileArchive} />
                        </Dropzone.Idle>
                        <div>
                            <Text size="sm" inline>
                                Drag images here or click to select files
                            </Text>
                            <Text size="xs" c="dimmed" inline mt={7}>
                                Attach as many files as you like, each file
                                should not exceed 5mb
                            </Text>
                        </div>
                    </>
                ) : (
                    <div className="flex gap-2">{previews}</div>
                )}
            </Group>
        </Dropzone>
    );
}
