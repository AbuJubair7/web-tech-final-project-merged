import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Feedback } from './entities/feedback.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeedbacksService {
          
  constructor(
    @InjectRepository(Feedback)
    private feedbackRepository: Repository<Feedback>
  ){}

  async create(createFeedbackDto: CreateFeedbackDto)  {
    const data = this.feedbackRepository.create(createFeedbackDto); 
    return this.feedbackRepository.save(data);
  }

    findAll() {
    return this.feedbackRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} feedback`;
  }

  // update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
  //   return `This action updates a #${id} feedback`;
  // }

  remove(id: number) {
    return `This action removes a #${id} feedback`;
  }
}
