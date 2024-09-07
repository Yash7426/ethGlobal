import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    username: string;
    userProfile: string;
    ensDomain: string;
    completedTasks: mongoose.Types.ObjectId[];
}

interface ITask extends Document {
    name: string;
    desc: string;
    ctaNeeded: string;
    usersCompleted: mongoose.Types.ObjectId[];
    protocolId: mongoose.Types.ObjectId;
}

interface IProtocol extends Document {
    name: string;
    description: string;
    icon: string;
    associatedTasks: mongoose.Types.ObjectId[];
}

// User Schema
const UserSchema: Schema<IUser> = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    userProfile : {
        type: String,
    },
    ensDomain: {
        type: String,
        unique: true,
        required: true
    },
    completedTasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
});

const TaskSchema: Schema<ITask> = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    ctaNeeded: {
        type: String, 
        required: true
    },
    usersCompleted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    protocolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Protocol'
    }
});

// Protocol Schema
const ProtocolSchema: Schema<IProtocol> = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    icon: {
        type: String, 
        required: true
    },
    associatedTasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
});

const User = mongoose.model<IUser>('User', UserSchema);
const Task = mongoose.model<ITask>('Task', TaskSchema);
const Protocol = mongoose.model<IProtocol>('Protocol', ProtocolSchema);

export { User, Task, Protocol };
