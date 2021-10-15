const Quiz = require('mongodb/models/Quiz')
const Question = require('mongodb/models/Question')

class QuizService {
  constructor(){
    this.models = {
      Quiz,
      Question,
    }
  }
  /**
   * @param {Object} data
   * @return {Boolean}
   * @throws {Error}
   */
  async createQuiz(data){
    return this.models.Quiz.create(data)
  }

  /**
   * @param {String} id
   * @param {Object} data
   * @return {Boolean}
   * @throws {Error}
   */
  async updateQuiz(id, data){
    return this.models.Quiz.updateOne({ _id: id} , data)
  }

  /**
   * @param {String} id
   * @return {Boolean}
   * @throws {Error}
   */
  async removeQuiz(id){
    return this.models.Quiz.deleteOne({ _id: id })
  }

  /**
   * @param {String} quizId
   * @param {Object} data
   * @return {Boolean}
   * @throws {Error}
   */
  async createQuestion(quizId, data){
    try{
      const { _id } = await this.models.Question.create(data)
      return this.models.Quiz.updateOne(
        { _id: quizId }, 
        { $push: {questions: _id } }
      )
    } catch(e) {
      throw Error(e)
    }
  }

  /**
   * @param {String} id
   * @param {Object} data
   * @return {Boolean}
   * @throws {Error}
   */
  async updateQuestion(id, data){
    return this.models.Question.updateOne({_id: id}, data)
  }

  /**
   * @param {String} id
   * @param {String} quizId
   * @return {Boolean}
   * @throws {Error}
   */
  async removeQuestion(id, quizId){
    try{
      await this.models.Quiz.updateOne({ _id: quizId }, { $pull: { questions: { _id: id } } })
      return this.models.Question.deleteOne({_id: id})
    } catch(e) {
      throw Error(e)
    }
  }
}