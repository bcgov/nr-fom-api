import { ApiCodeTableEntity } from '@entities';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('attachment_type_code')
export class AttachmentTypeCode extends ApiCodeTableEntity<AttachmentTypeCode> {
  constructor(attachmentTypeCode?: Partial<AttachmentTypeCode>) {
    super(attachmentTypeCode);
  }
}
