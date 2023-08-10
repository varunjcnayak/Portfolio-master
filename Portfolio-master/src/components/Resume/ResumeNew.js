import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import axios from "axios";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const fileId = "1_FyGbv81koURCfVChApBkBpw_CuUzSRQ"; // Replace with your actual Google Drive file ID
const apiKey = "AIzaSyCOQuG8oYhvXY6Q043W3yrMbfq-vQmOHDs"
const googleDriveAPI = `https://www.googleapis.com/drive/v3/files/${fileId}`;
const linkGit = "https://github.com/varunjcnayak/Portfolio-master/blob/master/Portfolio-master/src/Assets/VarunResumeAug.pdf";
function ResumeNew() {
  const [pdfLink, setPdfLink] = useState("");
  const [pdfLinkGit,setPdfLinkGit] = useState("");
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    setPdfLinkGit(linkGit);
    fetchPdfLink();
  }, []);

  const fetchPdfLink = async () => {
    try {
      const response = await axios.get(googleDriveAPI, {
        responseType: "blob", // Fetch the file as a blob
      });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(blob);
      setPdfLink(pdfUrl);
    } catch (error) {
      console.error("Error fetching PDF link:", error);
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfLinkGit}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdfLinkGit}
            className="d-flex justify-content-center"
          >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfLinkGit}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;