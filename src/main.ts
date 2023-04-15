import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import PDFDocument from "pdfkit";
import blobStream from "blob-stream";
import jsPDF from "jspdf";
import FileSaver from "file-saver";

App.config.globalProperties.$PDFDocument = PDFDocument;
App.config.globalProperties.$blobStream = blobStream;
App.config.globalProperties.$jsPDF = jsPDF;
App.config.globalProperties.$FileSaver = FileSaver;

createApp(App).mount("#app");
