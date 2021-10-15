const minioClient = require("minio");
const fileUpload = require('express-fileupload');
const express = require('server');
const MinioService = require('svc-minio');
const PostService = require('svc-posts');

const minioService = new MinioService(minioClient)
const postService = new PostService()

module.exports = (app) => {
  app.use(fileUpload())
  app.use(express.json())
    app.get('/file', async (req, res) => {
      const file = await minioClient.getObject('post-files', 'curriculum vitae Jordy Kokelaar 08-2020.pdf')
      console.log(file);
    })

    app.post('/upload', async (req, res) => {
      const { id } = req.body
      const { file } = req.files
      const buffer = file.data
      const filename = `${id}_${Date.now()}_${file.name}`.replace(/ /g,'')
      try{
        await minioService.uploadFile('post-files', filename, buffer)
        await postService.attachImage(id, filename)
        res.send(file.name)
      } catch(e) {
        res.status(400).send(e)
      }
    })
  }