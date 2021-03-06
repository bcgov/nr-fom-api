import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CodeTableController } from '@controllers';
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

  @Post()
  create(@Body() createDto: CreateWorkflowStateCodeDto) {
    return super.create(createDto);
  }

  @Get()
  findAll() {
    return super.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return super.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDto: UpdateWorkflowStateCodeDto) {
    return super.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return super.remove(id);
  }
}
