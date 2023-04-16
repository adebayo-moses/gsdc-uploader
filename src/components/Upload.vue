<template>
  <div>
    <div id="app">
      <h1>my All in one GSDC Converterr</h1>
      <form>
        <label for="file">Select a file:</label>
        <input type="file" id="file" name="file" v-on:change="convertToPdf" />
      </form>
      <a id="downloadLink"></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PDFDocument from "pdfkit";
import blobStream from "blob-stream";

export default defineComponent({
  name: "App",
  setup() {
    const convertToPdf = (event: any) => {
      const file = event.target.files[0];
      // Use the FileReader API to read the file buffer or text
      // Convert the document file to a PDF format using a tool/library like PDFKit
      const pdf = new PDFDocument();
      // Generate a client-side PDF file and save the file locally for download
      const pdfBlob = pdf.pipe(blobStream()).on("finish", function () {
        const pdfUrl = URL.createObjectURL(pdfBlob.toBlob("application/pdf"));
        const downloadLink = document.getElementById(
          "downloadLink"
        ) as HTMLAnchorElement;
        downloadLink.href = pdfUrl;
        downloadLink.download = "document_converted.pdf";
        downloadLink.click();
      });
    };
    return { convertToPdf };
  },
});
</script>

<style scoped></style>
