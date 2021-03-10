import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CodeTableController } from '../../../core/controllers/code.controller';
import { SubmissionTypeCodeService } from './submission-type-code.service';
import { SubmissionTypeCode } from './entities/submission-type-code.entity';
import { CreateSubmissionTypeCodeDto } from './dto/create-submission-type-code.dto';
import { UpdateSubmissionTypeCodeDto } from './dto/update-submission-type-code.dto';

@ApiTags('submission-type-code')
@Controller('submission-type-code')
export class SubmissionTypeCodeController extends CodeTableController<
  SubmissionTypeCode,
  CreateSubmissionTypeCodeDto,
  UpdateSubmissionTypeCodeDto
> {
  constructor(protected readonly service: SubmissionTypeCodeService) {
    super(service);
  }
}
