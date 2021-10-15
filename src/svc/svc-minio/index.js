
class MinioService {
    constructor(client){
      this.client = client;
    }

  /**
   * Uploads file to bucket
   * @param {String} bucket
   * @param {String} filename
   * @param {Buffer} data
   * @return {Promise<Model>}
   * @throws {Error} on validation failure
   */
  async uploadFile(bucket, filename, data){
    try {
      return this.client.putObject(bucket, filename, data)
    } catch(e) {
        throw Error(e)
    }
  }

  /**
   * Uploads file to bucket
   * @param {String} bucket
   * @param {String} id file identifier
   * @return {Buffer} file from bucket
   * @throws {Error} on validation failure
   */
  async getFile(bucket, id){
    try {
      return this.client.getObject(bucket, id)
    } catch(e) {
        throw Error(e)
    }
  }

  /**
   * Removes one file from bucket
   * @param {String} bucket
   * @param {String} id file identifier
   * @return {Boolean} true
   * @throws {Error} on validation failure
   */
  async deleteFile(bucket, id){
    try {
      return this.client.removeObject(bucket, id)
    } catch(e) {
        throw Error(e)
    }
  }

  /**
   * Removes multiple files from bucket
   * @param {String} bucket
   * @param {Array} ids file identifiers
   * @return {Boolean} true
   * @throws {Error} on validation failure
   */
  async deleteFiles(bucket, ids){
    try {
      return this.client.removeObjects(bucket, ids)
    } catch(e) {
        throw Error(e)
    }
  }
}
module.exports = MinioService
