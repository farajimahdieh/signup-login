import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';

@Entity({ name: 'users' })
export class users {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type : 'varchar',unique: true })
  email!: string;

  @Column({ type : 'varchar', unique: true })
  username!: string;

  @Column()
  password!: string;

  @CreateDateColumn()
  createdAt!: Date;

}
