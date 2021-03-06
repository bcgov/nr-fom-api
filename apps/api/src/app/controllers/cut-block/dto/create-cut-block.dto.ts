import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from '@dto';

export class CreateCutBlockDto extends BaseDto {
  @ApiProperty()
  geometry: any;
  @ApiProperty()
  plannedDevelopmentDate: string; // timestamp
  @ApiProperty()
  plannedAreaHa: number;
  // Relationships
  @ApiProperty()
  submissionId: number;
}
