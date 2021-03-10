import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CodeTableController } from '../../../core/controllers/code.controller';
import { WorkflowStateCodeService } from './workflow-state-code.service';
import { WorkflowStateCode } from './entities/workflow-state-code.entity';
import { CreateWorkflowStateCodeDto } from './dto/create-workflow-state-code.dto';
import { UpdateWorkflowStateCodeDto } from './dto/update-workflow-state-code.dto';

@ApiTags('workflow-state-code')
@Controller('workflow-state-code')
export class WorkflowStateCodeController extends CodeTableController<
  WorkflowStateCode,
  CreateWorkflowStateCodeDto,
  UpdateWorkflowStateCodeDto
> {
  constructor(protected readonly service: WorkflowStateCodeService) {
    super(service);
  }
}
