import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {EntityStatus} from "src/common/constants";

@Entity("articles", {schema: 'public'})
export default class Articles {
    @PrimaryColumn("uuid")
    id: string;

    @Column('text')
    title: string;

    @Column('text')
    content: string;

    @Column({ type: 'enum', name: 'entity_status', default: EntityStatus.Active, enum: EntityStatus })
    entityStatus: EntityStatus;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({
        type: 'timestamp with time zone',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
        name: 'updated_at',
    })
    updated_at: Date;
}
