import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from '@dto';

export class CreateRoadSectionDto extends BaseDto {
  @ApiProperty()
  geometry: any;
  @ApiProperty()
  plannedDevelopmentDate: string; // timestamp
  @ApiProperty()
  plannedLengthKm: number;
  // Relationships
  @ApiProperty()
  submissionId: number;
}
